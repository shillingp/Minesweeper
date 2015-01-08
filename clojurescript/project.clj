(defproject minesweep "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2197"]]
  
  :plugins [[lein-cljsbuild "1.0.3"]]
  
  :source-paths ["src"]
  
  :cljsbuild {:builds [{:id "minesweep"
                        :source-paths ["src"]
                        :compiler {:output-to "minesweep.js"
                                   :output-dir "out"
                                   :optimizations :advanced
                                   :pretty-print false}}]})
