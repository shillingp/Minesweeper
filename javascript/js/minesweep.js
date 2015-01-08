var gridSize = 20,
    grid = gridSize*gridSize,
    tileSize = 20,
    border = 3,
    maxMines = 20,
    bombs = [],

    board = document.getElementById("mineboard"),
    alltiles = board.getElementsByTagName("p");

function gameManager() {
    boardSettings();
    generateBomb();
    drawGrid();
}

gameManager();

// UTILITIES
function setAttrs(elem, data) {
    for (var key in data) {
        elem.setAttribute(key, data[key]);
    }
}
function setStyles(elem, data) {
    for (var key in data) {
        elem.style[key] = data[key];
    }
}

function removeItems(arr, items) {
    items.forEach(function(entry) {
        var index = arr.indexOf(entry);
        if (index > -1) {
            arr.splice(arr.indexOf(entry), 1);
        }
    });
}
function shuffleArray(arr) {
    for (var i=0;i<arr.length;i++) {
        var j = Math.floor(Math.random()*(i+1)),
            temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}



// DOC SETTINGS
function boardSettings() {
    setStyles(board, {"width": gridSize * (tileSize + (2 * border)) + "px",
                      "height": gridSize * (tileSize + (2 * border)) + "px"});
}



// BOARD FUNCTIONS
function createTile(bomb, numb) {
    var tile = document.createElement("p");
    setStyles(tile, {"width": tileSize + "px",
                     "height": tileSize + "px",
                     "border-width": border + "px",
                     "line-height": tileSize + "px"});
    setAttrs(tile, {"bomb": bomb,
                    "numb": numb});
    tile.onclick = function(e) {
        primaryCheck(e.target);
        update();
    };
    tile.oncontextmenu = function(e) {
        e.preventDefault();
        markFlag(e.target);
        return false;
    };
    board.appendChild(tile);
}

function drawGrid() {
    for (var i=0;i<grid;i++) {
        createTile(bombs[i], i);
    }
}



// BOMB FUNCTIONS
function generateBomb() {
    for (var i=0;i<grid;i++) {
        bombs.push(0);
        if (i < maxMines) {
            bombs[i] = 1;
        }
    }
    shuffleArray(bombs);
}



// CHECK FUNCTIONS
function bombHit(elem) {
    for (var i=0;i<bombs.length;i++) {
        if (bombs[i] === 1) {
            setAttrs(alltiles[i], {"checked": "true"});
        }
        setAttrs(elem, {"explode": "true"});
    }
}

function getBombs(data) {
    var a = 0;
    for (var i in data) {
        var b = alltiles[data[i]].getAttribute("bomb");
        a = a + parseInt(b, 10);
    }
    return a;
}

function markFlag(elem) {
    if (elem.getAttribute("flag") == "1") {
        elem.setAttribute("flag", "0");
    } else {
        elem.setAttribute("flag", "1");
    }
}

function markChecked(elem, value) {
    setAttrs(elem, {"checked": "true"});
    if (value != 0) {
        elem.textContent = value;
    }
}

function tertiaryCheck(elem, numb, areas) {
    if (! elem.hasAttribute("checked")) {
        var value = [];
        areas.forEach(function(entry) {
            switch (entry) {
            case "tl":
                value.push(numb - (gridSize + 1)); break;
            case "tm":
                value.push(numb - gridSize); break;
            case "tr":
                value.push(numb - (gridSize - 1)); break;
            case "ml":
                value.push(numb - 1); break;
            case "mr":
                value.push(numb + 1); break;
            case "ll":
                value.push(numb + (gridSize - 1)); break;
            case "lm":
                value.push(numb + gridSize); break;
            case "lr":
                value.push(numb + (gridSize + 1)); break;
            default: break;}
        });
        markChecked(elem, getBombs(value));
        if (! elem.textContent) {
            value.forEach(function(entry) {
                tertiaryCheck(alltiles[entry],
                              entry,
                              checkRound(alltiles[entry]));
            });
        }
    }
}

function checkRound(elem) {
    if (! elem.hasAttribute("checked")) {
        var numb = parseInt(elem.getAttribute("numb"), 10),
            spaces = ["tl", "tm", "tr", "ml", "mr", "ll", "lm", "lr"];
        if (numb < gridSize) {
            removeItems(spaces, ["tl", "tm", "tr"]);
        }
        if (0 === (numb % gridSize)) {
            removeItems(spaces, ["tl", "ml", "ll"]);
        }
        if (0 === ((numb + 1) % gridSize)) {
            removeItems(spaces, ["tr", "mr", "lr"]);
        }
        if (numb >= (grid - gridSize)) {
            removeItems(spaces, ["ll", "lm", "lr"]);
        }
        tertiaryCheck(elem, numb, spaces);
    };
}

function primaryCheck(elem) {
    if (! elem.hasAttribute("checked")) {
        if ("1" == elem.getAttribute("bomb")) {
            bombHit(elem);
            gameLose();
        } else {
            checkRound(elem);
        }
    }
}



// WIN/LOSE FUNCTIONS
function disableMouse() {
    for (var i=0;i<grid;i++) {
        alltiles[i].onclick = null;
        alltiles[i].oncontextmenu = function(e) {
            e.preventDefault();
        };
    }
}

function update() {
    var a = [];
    for (var i=0;i<grid;i++) {
        if (alltiles[i].hasAttribute("checked")) {
            a.push(0);
        } else {
            a.push(1);
        }
    }
    if (a.toString() == bombs.toString()) {
        gameWin();
    }
}

function gameWin() {
    console.log("YOU WIN");
    disableMouse();
}

function gameLose() {
    disableMouse();
}
