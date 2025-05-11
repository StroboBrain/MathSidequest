import NumberSwipeController from "../games/numberSwipe/numberSwipeController.js";

export default class NumberSwipeRunner {
    constructor(){
        this.parentDiv = document.getElementsByClassName("centerBackground")[0];
        this.numberSwipeController = new NumberSwipeController(this.parentDiv,1,110);
    }
}

// creates a NumberSwipeRunner object and starts the game
function startNumberSwipeRunner(){
    var numberSwipeRunner = new NumberSwipeRunner();
}

window.addEventListener("DOMContentLoaded", function() {
    startNumberSwipeRunner();
});