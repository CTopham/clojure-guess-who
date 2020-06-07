(ns guess-who.keycodes
  (:require [clojure.string :as string :refer [split join]]
            ))

;The keycodes namespace is used to decipher keycodes that we collect
; during the user input and translate that into actual words. the
; key-mapper is a hashmap that shows the key value pair of keycodes.
;the get-words uses map and a for loop due to multiple letters appearing twice in some
;input. get-words will translate what the input into a string.

(def key-mapper
  {
   :113 "q"
   :119	"w"
   :101	"e"
   :114	"r"
   :116	"t"
   :121	"y"
   :117	"u"
   :105	"i"
   :111	"o"
   :112	"p"
   :97	"a"
   :115	"s"
   :100	"d"
   :102	"f"
   :103	"g"
   :104	"h"
   :106	"j"
   :107	"k"
   :108	"l"
   :122	"z"
   :120	"x"
   :99	"c"
   :118	"v"
   :98	"b"
   :110	"n"
   :109	"m"
   :32 " "
   :13 ""
   }
  )

;translates the the word array we get from user input into an actual word
(defn get-word [coll]
  (let [kws (map #(keyword (str %))coll)                    ;convert ints to keywords for map lookup
        letters (for [x kws :let [y (get key-mapper x)]] y) ;loop through the user input and return the letter
        ]
    (string/join letters)                                   ;join the string and return it to the caller
    )
  )
