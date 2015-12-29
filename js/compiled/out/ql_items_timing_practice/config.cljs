(ns ql-items-timing-practice.config)



(def debug?
  ^boolean js/goog.DEBUG)



(when debug?
  (enable-console-print!))
