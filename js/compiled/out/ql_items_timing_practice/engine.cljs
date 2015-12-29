(ns ql-items-timing-practice.engine)


(def pick-up-intervals
  {:armor  25
   :health 35})



(def armors
  {:ra {:label "Red Armor"}
   :ya {:label "Yellow Armor"}
   :ga {:label "Green Armor"}
   ;:sa {:label "Shards"}
   })



(def health-bubbles
  {:mh {:label "Mega Health"}
   :rh {:label "50 health Bubble"}
   ;:yh {:label "25 Health Bubble"}
   ;:gh {:label "5 Health Bubble"}
   })



(defn map-items [item-keys type]
  {:pre  [(keyword? type)
          (every? keyword? item-keys)
          (distinct? item-keys)]
   :post [(= (set (keys %)) (set item-keys))
          (every? (partial = type) (vals %))
          (= (count item-keys) (count %))]}
  (->> type
       (iterate identity)
       (interleave item-keys)
       (apply hash-map)))



(def items-map
  (merge
    (map-items (keys armors) :armor)
    (map-items (keys health-bubbles) :health)))



(defn- valid-sec-value? [n]
  (and (integer? n)
       (<= 0 n)
       (<= n 59)))



(defn- next-time-pure [items-map pick-up-intervals item-key pick-up-time]
  {:pre  [(contains? items-map item-key)
          (= (set (vals items-map)) (set (keys pick-up-intervals)))
          (valid-sec-value? pick-up-time)]

   :post [(valid-sec-value? %)]}

  (mod (+ pick-up-time
          (pick-up-intervals (items-map item-key))) 60))



(def next-time (partial next-time-pure items-map pick-up-intervals))



(defn- random-item-pickup [items-map]
  {:item (rand-nth (keys items-map))
   :time (rand-int 60)})


(def new-random-item (partial random-item-pickup items-map))
