import ClassicController from "../games/classic/classicController.js"

export default class ClassicRunner {
    constructor(){
        this.parentDiv = document.getElementsByClassName("centerBackground")[0];
        // katex already loaded in index.html
        this.classicController = new ClassicController(this.parentDiv, katex);
    }
}

// creates a classicRunner object and starts the game
function startClassicRunner(){
    var classicRunner = new ClassicRunner();
}

window.addEventListener("DOMContentLoaded", function() {
    startClassicRunner();
});