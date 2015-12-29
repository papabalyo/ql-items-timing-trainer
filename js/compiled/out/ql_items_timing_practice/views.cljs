(ns ql-items-timing-practice.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]))


(defn- start-training-handler [e]
  (do
    (.preventDefault e)
    (re-frame/dispatch [:init-training])
    (re-frame/dispatch [:add-new-question])
    (re-frame/dispatch [:set-active-panel :trainer])))



(defn- img-path [item-key]
  (str "img/icons/" (name item-key) ".png"))



(defn welcome-panel []
  (fn []
    [:div.jumbotron
     [:h1
      "About"]
     [:p.lead
      "You'll be given 20 questions, each question will consist of Quake Live item (like Read Armor or Mega Health)
      and a pick-up time for this item, in seconds. Your goal is to type next spawn time for this item within 5 seconds for each question.
      At the end you'll see a summary of correct/incorrect answers."
      [:p
       [:a.btn.btn-lg.btn-primary
        {:href     "#"
         :role     "button"
         :on-click start-training-handler}
        "Start practice"]]]]))


(defn answer-input []
  (let [current-answer (re-frame/subscribe [:current-answer])]
    (reagent/create-class
      {:component-function
       (fn []
         [:input.answer {:type      :text
                         :value     (:input @current-answer)
                         :on-change #(re-frame/dispatch [:on-current-answer-change (-> % .-target .-value)])}])

       :component-did-mount
       #(.focus (reagent/dom-node %))})))



(defn trainer-panel []
  (let [current-question (re-frame/subscribe [:current-question])
        current-question-state (re-frame/subscribe [:current-question-state])]
    (reagent/create-class
      {:component-function
       (fn []
         [:div
          {:on-key-down #(when (= 13 (.-keyCode %))
                          (if (= :submitted (:state @current-question-state))
                            (re-frame/dispatch [:add-new-question])
                            (re-frame/dispatch [:submit-answer])))}

          [:div.row
           [:div.col-xs-10.col-xs-offset-1
            [:div.col-xs-4
             [:img.thumbnail
              {:src   (img-path (:item @current-question))
               :width "128px"}]]

            [:div.col-xs-8
             [:div.row
              [:div.col-xs-12
               [:div.col-xs-6
                [:div.statistics.text-center
                 [:div.value.given-value (:time @current-question)]
                 [:div.label "Pick Up"]]]

               [:div.col-xs-6
                [:div.statistics.text-center
                 [:div.value [answer-input]]
                 [:div.label "Next Spawn"]]]]]

             (when (= :submitted (:state @current-question-state))
               [:div.row {:style {:margin-top "20px"}}
                (if (= (:correct @current-question-state) (:input @current-question-state))
                  [:div.alert.alert-success "Correct!"]
                  [:div.alert.alert-danger "Wrong! Correct spawn time is "
                   [:span.statistics
                    [:span.value {:style {:color "#a94442"}}
                     (:correct @current-question-state)]]])])]]]

          [:div.row
           [:div.col-xs-6.col-xs-offset-3
            [:div.text-center
             (if (= :submitted (:state @current-question-state))
               [:span.text-muted "Press Enter to continue..."]
               [:h2.text-muted "Answer in " (inc (:ticks-left @current-question-state)) " seconds..."])

             [:hr]
             [:small.text-muted "Question " (:number @current-question) " out of " (:total @current-question)]]]]])})))



(defn results-panel []
  (let [results (re-frame/subscribe [:results])]
    (fn []
      [:div
       [:table.table
        [:thead
         [:tr
          [:th "Question #"]
          [:th "Item"]
          [:th "Pick Up"]
          [:th "Spawn"]
          [:th "Your answer"]]]

        [:tbody
         (doall
           (for [[i result] (map-indexed vector @results)]
             (let [correct? (= (:correct result) (:input result))]
               ^{:key i}
               [:tr {:class (if correct? "success" "danger")}
                [:td.text-center (inc i)]
                [:td
                 [:img {:src (img-path (:item result))}]]
                [:td
                 [:div.statistics
                  [:div.value (:time result)]]]
                [:td
                 [:div.statistics
                  [:div.value.correct
                   (:correct result)]]]
                [:td
                 [:div.statistics
                  [:div.value {:class (if correct? "correct" "wrong")}
                   (:input result)]]]])))]]

       [:hr]

       [:a.btn.btn-lg.btn-primary
        {:href     "#"
         :role     "button"
         :on-click start-training-handler}
        "Start over"]])))


(defn page-not-found []
  [:div 404])



(defmulti panels identity)
(defmethod panels :welcome [] [welcome-panel])
(defmethod panels :trainer [] [trainer-panel])
(defmethod panels :results [] [results-panel])
(defmethod panels :default [] [:div])




(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [:div.container
       [:div.header.clearfix
        [:h3 {:style {:color "#1B1C1D"}}
         "Quake Live Items Timing Trainer"]]

       [:hr]

       (panels @active-panel)])))
