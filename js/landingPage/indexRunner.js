import IndexClass from "./indexClass.js";
let containerForMenu = document.getElementsByClassName("centerContentContainer")[0];
var indexClass = new IndexClass(containerForMenu);

// Not sure if i will switch to id in futur, I would love a more general aproachh
indexClass.addButton("primeStartButton","primeStartButton menuButton", "PRIME GAME");
indexClass.addButton("squareGameButton","squareGameButton menuButton",  "SQUARE GAME");
indexClass.addButton("escapeRoom","escapeRoom menuButton", "ESCAPE ROOM");



indexClass.setUpDisplay();


