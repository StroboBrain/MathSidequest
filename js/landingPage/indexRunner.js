import IndexClass from "./indexClass.js";
let containerForMenu = document.getElementsByClassName("centerContentContainer")[0];
var indexClass = new IndexClass(containerForMenu);
indexClass.addButton("primeStartButton","primeStartButton", "PRIME GAME");
indexClass.setUpDisplay();

