(ns minesweep.core)



;; DEVELOPEMENT SETTINGS
(enable-console-print!)
(defn log [x]
  (.log js/console x))



;; CORE LIBRARIES



;; VARIABLE DECLARATION
(def doc js/document)
(declare primarycheck)
(declare markflag)
(declare checkround)
(declare gamelose)
(declare gamewin)


;; GAME SETTINGS
(def tilesize 20)
(def gridsize 10)
(def border 3)

(def maxmines 10)
(def bombs (atom ()))


;; DOCUMENT FUNCTIONS
(defn by-id
  ;; Get element by id
  ([id] (by-id doc id))
  ([elem id] (.getElementById elem (name id))))

(defn by-class
  ;; Get elements by class name
  ([class] (by-class doc class))
  ([elem class] (.getElementsByClassName elem (name class))))

(defn by-tag
  ;; Get elements by tag name
  ([tag] (by-tag doc tag))
  ([elem tag] (.getElementsByTagName elem (name tag))))



;; UTILITIES
(defn keytoprop
  [key]
  (let [key (atom (name key))]
    (dotimes [i (count (re-seq #"-\w" @key))]
      (reset! key (.replace @key #"-\w"
                            (fn [x] (second (.toUpperCase x))))))
    @key))

(defn setstyles
  [elem data]
  (doseq [[k v] data]
    (aset (.-style elem) (keytoprop k) v)))

(defn setattrs
  [elem data]
  (doseq [[k v] data]
    (.setAttribute elem (keytoprop k) v)))



;; ELEMENT VARIABLES
(def board (by-id :mineboard))
(def alltiles (by-tag board :p))


;; GAME FUNCTIONS
;; DOC SETTINGS
(defn boardsettings
  []
  (setstyles board {:width  (* gridsize (+ tilesize (* 2 border)))
                    :height (* gridsize (+ tilesize (* 2 border)))}))

(defn docsettings
  []
  (boardsettings))



;; BOARD FUNCTIONS
(defn createtile
  [bomb numb]
  (let [tile (.createElement doc "p")]
    (setstyles tile {:width tilesize
                     :height tilesize
                     :border-width border})
    (setattrs tile {:bomb bomb
                    :numb numb})
    (aset tile "onclick" (fn [e] (primarycheck (aget e "target"))))
    (aset tile "oncontextmenu" (fn [e] (do (.preventDefault e)
                                          (markflag (aget e "target")) false)))
    (.appendChild board tile)))

(defn drawgrid
  []
  (dotimes [i (* gridsize gridsize)]
    (createtile (nth @bombs i) i)))



;; BOMB FUNCTIONS
(defn generatebomb
  []
  (let [empty (- (* gridsize gridsize) maxmines)]
    (reset! bombs
            (->
             (concat
              (repeat maxmines 1)
              (repeat empty 0))
             (shuffle)
             (seq)))))



;; CHECK FUNCTIONS
(defn bombhit
  [elem]
  (dotimes [i (count @bombs)]
    (if (= 1 (nth @bombs i))
      (setattrs (aget alltiles i)
                {:checked true}))
    (setattrs elem {:explode true})))

(defn markflag
  [elem]
  (if (= "1" (.getAttribute elem "flag"))
    (setattrs elem {:flag "0"})
    (setattrs elem {:flag "1"})))

(defn markchecked
  [elem value]
  (setattrs elem {:checked true})
  (if (not= value 0)
    (aset elem "textContent" value)))

(defn getbombs
  [data]
  (let [a (atom ())]
    (doseq [i data]
      (swap! a conj
             (int
              (.getAttribute
               (aget alltiles i)
               "bomb"))))
    (reduce + @a)))

(defn tertiarycheck
  [elem numb areas]
  (if (not (.hasAttribute elem "checked"))
    (let [value (atom ())]
      (doseq [a areas]
        (swap! value conj
               (case a
                 :tl (- numb (+ gridsize 1))
                 :tm (- numb gridsize)
                 :tr (- numb (- gridsize 1))
                 :ml (- numb 1)
                 :mr (+ numb 1)
                 :ll (+ numb (- gridsize 1))
                 :lm (+ numb gridsize)
                 :lr (+ numb (+ 1 gridsize))
                 nil)))      
      (markchecked elem
                     (getbombs @value))
      (if (empty? (aget elem "textContent"))
        (doseq [v @value]
            (tertiarycheck (aget alltiles v)
                           v
                           (checkround (aget alltiles v))))))))

(defn checkround
  [elem]
  (if (not (.hasAttribute elem "checked"))
    (let [numb (int (.getAttribute elem "numb"))
          spaces (atom '(:tl :tm :tr :ml :mr :ll :lm :lr))]
      (if (< numb gridsize)
        (reset! spaces
                (remove #{:tl :tm :tr} @spaces)))
      (if (zero? (rem numb gridsize))
        (reset! spaces
                (remove #{:tl :ml :ll} @spaces)))
      (if (zero? (rem (+ 1 numb) gridsize))
        (reset! spaces
                (remove #{:tr :mr :lr} @spaces)))
      (if (>= numb (* gridsize (- gridsize 1)))
        (reset! spaces
                (remove #{:ll :lm :lr} @spaces)))
      (tertiarycheck elem numb @spaces))))

(defn primarycheck
  [elem]
    (if (not (.hasAttribute elem "checked"))
      (if (= "1" (.getAttribute elem "bomb"))
        (do
          (bombhit elem)
          (gamelose))
        (checkround elem))))


;; WIN/LOSE FUNCTIONS
(defn gamewin
  []
  (prn "YOU WIN"))

(defn gamelose
  []
  (prn "GAME OVER"))




(defn minesweep
  []
  (generatebomb)
  (docsettings)
  (drawgrid))

(minesweep)
