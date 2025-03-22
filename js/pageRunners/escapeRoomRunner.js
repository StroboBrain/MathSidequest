import IsPrimeController from "../games/isPrime/isPrimeController.js";
// This class is responsible for linking up the buttons

export default class EscapeRoomRunner {
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

    startEscapeRoomController(){
        this.EscapeRoomController = new EscapeRoomController(this.titleDiv,this.contentDiv,this.yesButton, this.noButton,taskArguments);

        this.EscapeRoomController.startGame();
    }
}


function startEscapeRoomRunner(){
    var isEscapeRoomRunner = new EscapeRoomRunner();
}

window.addEventListener("DOMContentLoaded", function() {
    startEscapeRoomRunner();
});


