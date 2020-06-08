(ns guess-who.framework
  (:require
    [guess-who.person-generator :as pg]
    [clojure.string :as string :refer [split join]]
    ))
;The frameworks job is to take the user input which has already been translated into readable
;language figure out what the user is really asking in the decode method, decode will return an attribute,
;we use that attribute and pass it into the interpreter to see if its true or not. The interpreter will send
;back a unique ID. We then plug that unique ID into the dynamic answer and send that out to the UI


;this returns the attribute from the key code map
(defn decoder [s]
  (let [alex (string/includes? s "alex")
        alfred (string/includes? s "alfred")
        hair (string/includes? s "hair")
        eyes (string/includes? s "eyes")
        mustache (string/includes? s "mustache")
        ]
    (cond
      (= alex true) {:attribute "alex" :full-input s}
      (= alfred true) {:attribute "alfred" :full-input s}
      (= hair true) {:attribute "hair" :full-input s}
      (= eyes true) {:attribute "eyes" :full-input s}
      (= mustache true) {:attribute "mustache" :full-input s}
      :else {:attribute "unknown" :full-input s})
    )
  )

;use the generated target as a parameter
(defmulti interpret :attribute)

(defmethod interpret "hair" [m]
  (cond
    (string/includes? (get m :full-input) "brown") (assoc m :hair-color "brown")
    (string/includes? (get m :full-input) "red") (assoc m :hair-color "red")
    (string/includes? (get m :full-input) "blonde") (assoc m :hair-color "blonde")
    (string/includes? (get m :full-input) "black") (assoc m :hair-color "black")
    (string/includes? (get m :full-input) "bald") (assoc m :hair-color "bald")
    (string/includes? (get m :full-input) "short") (assoc m :hair-type "short")
    (string/includes? (get m :full-input) "long") (assoc m :hair-type "long")
    (string/includes? (get m :full-input) "curly") (assoc m :hair-type "curly")
    (string/includes? (get m :full-input) "straight") (assoc m :hair-type "straight")
    )
  )

(defmethod interpret "alex" [m]
  (cond
    (string/includes? (get m :full-input) "alex") (assoc m :solve "alex")
    )
  )

(defmethod interpret "alfred" [m]
  (cond
    (string/includes? (get m :full-input) "alfred") (assoc m :solve "alfred")
    )
  )

(defmethod interpret "unknown" [m]
  (assoc m :unknown "Please try again")
  )

;Takes the interpreted map and the target map
;checks to see if the user guess the correct person
;checks to see if the question the user ask is right or wrong
;always returns a text response that we set as our
(defn Dynamic-Answers [m targ]
  (if (string/includes? (get m :full-input) (get targ :name))
    (#(str "Yes! You guessed it! the person is " %1) (get targ :name))
    (cond
      (contains? m :hair-type) (if (#(= (get m :hair-type) %) (get targ :hair-type))
                                 (#(str "Yes! the persons hair is " %1) (get targ :hair-type))
                                 (#(str "No, the persons hair is NOT " %1) (get m :hair-type)))

      (contains? m :solve) (if (#(= (get m :solve) %) (get targ :name))
                                 (#(str "Yes! the persons is " %1) (get targ :name))
                                 (#(str "No, the persons is NOT " %1) (get m :solve)))

      (contains? m :unknown) ("Unknown command")
      :else "unknown command")
    )
  )
