import IsPrimeController from "./isPrimeController.js";



window.addEventListener("load", function() {
    var contentDiv = document.getElementsByClassName("centerContentContainer")[0];
    var isPrimeController = new IsPrimeController(contentDiv);

});