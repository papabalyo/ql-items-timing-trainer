(ns ql-items-timing-practice.core
  (:require [reagent.core :as reagent]
            [cljsjs.bootstrap]
            [re-frame.core :as re-frame]
            [ql-items-timing-practice.handlers]
            [ql-items-timing-practice.subs]
            [ql-items-timing-practice.views :as views]
            [ql-items-timing-practice.config :as config]))



(when config/debug?
  (println "dev mode"))




(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))



(defn ^:export init []
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))
