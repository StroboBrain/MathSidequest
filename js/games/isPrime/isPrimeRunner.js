import IsPrimeController from "./isPrimeController.js";

// Starts the game


window.addEventListener("load", function() {
    let titleDiv = this.document.getElementsByClassName("titleText")[0];
    let contentDiv = document.getElementsByClassName("centerContentContainer")[0];
    let yesButton = document.getElementsByClassName("leftButton")[0];
    let noButton = document.getElementsByClassName("rightButton")[0];
    
    // Primes, nonPrimes, lives
    let taskArguments = [3,6,2];
    var isPrimeController = new IsPrimeController(titleDiv,contentDiv,yesButton, noButton,taskArguments);
    isPrimeController.startGame();
});
