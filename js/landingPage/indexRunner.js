import IndexClass from "./indexClass.js";
let menuButtonParent = document.getElementsByClassName("centerContentContainer")[0];
let containerForMenu = document.createElement("div");
menuButtonParent.appendChild(containerForMenu);

containerForMenu.id ="centerButtonContainer";
containerForMenu.className = "centerButtonContainer";

var indexClass = new IndexClass(containerForMenu);



// Not sure if i will switch to id in future, I would love a more general aproach

indexClass.addButton("primeStartButton","primeStartButton menuButton", "PRIME GAME", "isPrimeGame.html");
indexClass.addButton("squareGameButton","squareGameButton menuButton",  "SQUARE GAME", "escapeRoom.html");
indexClass.addButton("escapeRoom","escapeRoom menuButton", "ESCAPE ROOM", "squareGame.html");


indexClass.setUpDisplay();