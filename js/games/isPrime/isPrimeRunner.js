import IsPrimeController from "./isPrimeController.js";

// This class is responsible for linking up the buttons

export default class IsPrimeRunner {
    addButtons(){
        this.titleDiv = document.getElementsByClassName("titleText")[0];
        this.contentDiv = document.getElementsByClassName("centerContentContainer")[0];
        this.yesButton = document.getElementsByClassName("leftButton")[0];
        this.noButton = document.getElementsByClassName("rightButton")[0];
    }
}


window.addEventListener("DOMContentLoaded", function() {

});


function startIsPrime(){
    let taskArguments = [3,6,2];
    this.isPrimeController = new IsPrimeController(titleDiv,contentDiv,yesButton, noButton,taskArguments);
    isPrimeController.startGame();
}

