import IsPrimeController from "../games/isPrime/isPrimeController.js";
// This class is responsible for linking up the buttons

export default class IsPrimeRunner {
    constructor(){
        this.addButtons();
        this.startIsPrimeGame();
    }
    addButtons(){
        this.titleDiv = document.getElementsByClassName("titleText")[0];
        this.contentDiv = document.getElementsByClassName("centerContentContainer")[0];
        this.yesButton = document.getElementsByClassName("leftButton")[0];
        this.noButton = document.getElementsByClassName("rightButton")[0];
    }
    startIsPrimeGame(){
    let taskArguments = [3,6,2];
    this.isPrimeController = new IsPrimeController(this.titleDiv,this.contentDiv,this.yesButton, this.noButton,taskArguments);
    this.isPrimeController.startGame();
    }
}


function startPrimeRunner(){
    var isPrimeRunner = new IsPrimeRunner();
}

window.addEventListener("DOMContentLoaded", function() {
    startPrimeRunner();
});


