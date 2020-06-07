(ns guess-who.person-generator)

;The person generator generates the target
(def people
  {
   :alex   {:name "alex" :mustache true :hair-color "black" :hair-type "long" :gender "male"}
   :alfred {:name "alfred" :mustache true :hair-color "black" :hair-type "long" :gender "male"}
   }
  )

;Gets a random person from the map and returns another map with their info
(defn generate-target []
  (let [target (rand-nth (map conj (keys people)))          ;gets a key from map of people
        target-info (get people target)                     ;gets the info for the random target
        ]
    target-info                                            ;return map of targets info
    ))
