/*jshint browser: true*/

var gridC = document.querySelector("#grid-size"),
    mineC = document.querySelector("#mine-number"),
    gameB = document.querySelector("#game-button");

var limits = {
    grid: {
        def: gridSize,
        min: 5,
        max: 25
    },
    mines: {
        def: maxMines,
        min: 10,
        max: 60
    }
};

function initializeControls(e, obj) {
    e.defaultValue = obj.def;
    e.labels[0].textContent = obj.def;
    e.min = obj.min;
    e.max = obj.max;
}

function addListeners() {
    gridC.oninput = setLabel;
    mineC.oninput = setLabel;
    gridC.onchange = function() {gridSize = parseInt(this.value); grid = gridSize*gridSize;};
    mineC.onchange = function() {maxMines = parseInt(this.value);};
    gameB.onclick = gameManager;
}

function setLabel() {
    this.labels[0].textContent = this.value;
}

initializeControls(gridC, limits.grid);
initializeControls(mineC, limits.mines);
addListeners();