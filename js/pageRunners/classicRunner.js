import ClassicController from "../games/classic/classicController.js"

export default class ClassicRunner {

    constructor(){
        this.parentDiv = document.getElementsByClassName("centerBackground")[0];

        this.classicController = new ClassicController(this.parentDiv);
    }
}

function startClassicRunner(){
    var classicRunner = new ClassicRunner();
}

window.addEventListener("DOMContentLoaded", function() {
    startClassicRunner();
});