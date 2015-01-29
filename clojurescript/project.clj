(defproject minesweep "0.1.0-SNAPSHOT"
    :description "FIXME: write this!"
    :url "http://example.com/FIXME"

    :dependencies [[org.clojure/clojure "1.6.0"]
                   [org.clojure/clojurescript "0.0-2665"]]

    :plugins [[lein-cljsbuild "1.0.4"]]

    :source-paths ["src" "target/classes"]

    :clean-targets ["out/minesweep" "minesweep.js" "minesweep.min.js"]

    :cljsbuild {:builds [{:id "minesweep"
                          :source-paths ["src"]
                          :compiler {:output-to "minesweep.js"
                                     :output-dir "out"
                                     :optimizations :advanced
                                     :pretty-print false}}]})
