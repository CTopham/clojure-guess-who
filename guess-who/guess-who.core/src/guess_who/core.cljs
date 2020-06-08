(ns ^:figwheel-hooks guess-who.core
  (:require
    [goog.dom :as gdom]
    [reagent.core :as reagent :refer [atom]]
    [cljs.test :refer-macros [deftest is]]
    [guess-who.person-generator :as pg]
    [guess-who.keycodes :as kc]
    [guess-who.framework :as fw]
    ))

(defn new-board [n]
  (vec (repeat n (vec  (repeat n 0))))
  )

(def board-size 3)

;; This is the main app state method, this stores our header text, our SVG grid, and our target.
(defonce app-state
         (atom {:text "Guess Who"
                :board (new-board board-size)
                :target (pg/generate-target)                ;this is a map
                }))

;printing the target to console
(println (:target @app-state))

;Input state store our word arrays, anything we type into the text box get placed into the vector
(defonce input-state
         (atom {
                :word-array []
                }))

;This is where we swap our state for our question answers
(defonce output-state
         (atom {
                :answer "listening.."
                }))
;decode and get attribute key
;plug in attribute key to interpreter; get unique key back
;plug in unique key into response
;change :cmd to response
;clear word
(defn handle-input []
  (let [translated-word (kc/get-word (get-in @input-state [:word-array]))
        decoded-phrase-map (fw/decoder translated-word)
        interpret-map (fw/interpret decoded-phrase-map)
        response (fw/Dynamic-Answers interpret-map (:target @app-state))
        ]
    (prn translated-word)
    (swap! output-state assoc-in [:answer] response)               ;this should return our response method
    (swap! input-state assoc-in [:word-array] [])
    (prn "reset")
    (prn (get-in @input-state [:word-array]))

    )
  )

;This is the core method that is building our grid
(defn guess-who []
  [:center
   [:h1 (:text @app-state)]
   [:input {:type :textarea
            :on-key-press (fn [e]
                            (swap! input-state update-in [:word-array] conj (.-charCode e)) ;append keycode pressed
                            ;(println "key press" (.-charCode e))
                            (if (= 13 (.-charCode e))       ;collect once we hit enter
                              (handle-input)                 ;clears our word array
                              ))}]
   [:h3 (:answer @output-state)]
   (into
     [:svg
      {:view-box"0 0 3 3"
       :width 1000
       :height 600
       }
      (for [i (range(count(:board @app-state)))
            j (range(count(:board @app-state)))]
        [:rect {:width .66
                :height .89
                :fill (if (zero? (get-in @app-state [:board j i]))
                        "rgba(100,200,10,0.0"
                        "white")
                :x i
                :y j
                :on-click
                (fn box-click [e]
                  (prn :board j i)
                  (swap! app-state assoc-in [:board j i]))}])])]
  )


;--------  loaders --------

;This method pushes out code into the main div in our html
(reagent/render-component [guess-who]
                          (. js/document (getElementById "app")))

;this is what we get when we reload, its just printing
(defn on-js-reload []
  (prn (:board @app-state)
       (:target @app-state)
       (:text @app-state)
       (:target @app-state)
       ))

;do i need this?
(defn get-app-element []
  (gdom/getElement "app"))

;--- delete me's-----

;#(reset! app-state {:test-count 5})
