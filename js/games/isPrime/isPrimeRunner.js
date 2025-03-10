import IsPrimeController from "./isPrimeController.js";

// Starts the game


window.addEventListener("load", function() {
    var contentDiv = document.getElementsByClassName("centerContentContainer")[0];
    let yesButton = document.getElementsByClassName("leftButton")[0];
    let noButton = document.getElementsByClassName("rightButton")[0];
    
    // Primes and nonPrimes
    let taskArguments = [3,6];
    var isPrimeController = new IsPrimeController(contentDiv,yesButton, noButton,taskArguments);
});