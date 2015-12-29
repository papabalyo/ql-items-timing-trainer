(ns ql-items-timing-practice.handlers
  (:require [re-frame.core :as re-frame]
            [ql-items-timing-practice.engine :as engine]
            [ql-items-timing-practice.db :as db]))



(re-frame/register-handler
  :initialize-db
  (fn [_ _]
    db/default-db))



(re-frame/register-handler
  :set-active-panel
  (fn [db [_ panel]]
    (assoc db :active-panel panel)))



(re-frame/register-handler
  :init-training
  (fn [db _]
    (assoc db
      :current-training {:questions (list)
                         :answers   (list)})))



(defn- submit-answer [db]
  (let [answers (get-in db [:current-training :answers])]
    (assoc-in db [:current-training :current-question]
              (merge {:state :submitted} (first answers)))))



(defn- stop-timer [db]
  (let [timer (get-in db [:current-training :current-question :timer])]
    (when-not (nil? timer)
      (js/clearInterval timer))))



(defn- add-question [db]
  (stop-timer db)

  (if (= (count (get-in db [:current-training :questions])) (:questions-count db))
    (assoc db :active-panel :results)
    (let [question (engine/new-random-item)
          answer {:correct (engine/next-time (:item question) (:time question))
                  :input   ""}]

      (-> db
          (update-in [:current-training :questions] conj question)
          (update-in [:current-training :answers] conj answer)
          (assoc-in [:current-training :current-question]
                    {:state      :in-progress
                     :ticks-left 4
                     :timer      (js/setInterval #(re-frame/dispatch [:tick]) 1000)})))))



(re-frame/register-handler
  :add-new-question
  (fn [db _]
    (add-question db)))



(re-frame/register-handler
  :tick
  (fn [db _]
    (if ((complement pos?) (get-in db [:current-training :current-question :ticks-left]))
      (do
        (stop-timer db)
        (submit-answer db))
      (update-in db [:current-training :current-question :ticks-left] dec))))



(re-frame/register-handler
  :on-current-answer-change
  (fn [db [_ new-value]]
    (update-in db [:current-training :answers]
               (fn [answers]
                 (cons (assoc (first answers) :input (int new-value)) (rest answers))))))



(re-frame/register-handler
  :submit-answer
  (fn [db _]
    (stop-timer db)
    (submit-answer db)))
