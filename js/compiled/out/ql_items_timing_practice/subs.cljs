(ns ql-items-timing-practice.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))



(re-frame/register-sub
  :active-panel
  (fn [db]
    (reaction (:active-panel @db))))



(re-frame/register-sub
  :questions-count
  (fn [db]
    (reaction (:questions-count @db))))



(re-frame/register-sub
  :current-training
  (fn [db]
    (reaction (:current-training @db))))



(re-frame/register-sub
  :results
  (fn [db]
    (reaction
      (let [{:keys [questions answers]} (:current-training @db)]
        (->> (interleave (reverse questions) (reverse answers))
             (partition 2)
             (map #(apply merge %)))))))



(re-frame/register-sub
  :current-question
  (fn [db]
    (reaction (merge
                (first (get-in @db [:current-training :questions]))
                {:number (count (get-in @db [:current-training :questions]))
                 :total  (:questions-count @db)}))))



(re-frame/register-sub
  :current-answer
  (fn [db]
    (reaction (first (get-in @db [:current-training :answers])))))



(re-frame/register-sub
  :current-question-state
  (fn [db]
    (reaction (get-in @db [:current-training :current-question]))))
