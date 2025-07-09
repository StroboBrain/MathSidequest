import SwipeDetector from "../gameFeatures/swipeDetector.js";

export default class IsPrimeView {
    constructor(titleDiv, parentDiv, yesButton, noButton, restartButton, isPrimeController){
        this.isPrimeController = isPrimeController;
        this.titleDiv = titleDiv;
        this.parentDiv = parentDiv;
        this.yesButton = yesButton;
        this.noButton = noButton;
        this.restartButton = restartButton;
        this.createGameDisplayDiv();
        this.colorWrongAnswer = "#c20a28";
        this.colorRightAnswer = "#1e7e34";
        this.SwipeDetector = new SwipeDetector(null, 100, 1000);
        this.setUpSwipeDetector();
    }

    setTitleDiv(){
        this.titleDiv.innerHTML = "IS IT PRIME?"
    }

    setUpDisplay(){
        this.addYesButton(this.yesButton);
        this.addNoButton(this.noButton);
        this.addRestartButton(this.restartButton);
        this.addGameDisplayDiv();
        this.setTitleDiv();
    }

    startGame(taskValue){
        this.upDateContent(taskValue);
        this.displayYesNoButtons();
        this.restartButton.style.display = "none";
        this.parentDiv.style.background = ""; // Reset background color
    }

    displayYesNoButtons(){
        this.yesButton.style.display = "inline-block";  
        this.noButton.style.display = "inline-block";
    }

    createGameDisplayDiv(){
        this.gameDisplay = document.createElement("div");
        this.gameDisplay.className = "gameDisplay";
        //this.gameDisplay.style.display = "none";
        this.gameDisplay.id = "isPrimeGame";
    }

    setUpSwipeDetector(){
        this.SwipeDetector.on('swipeLeft', () => {
            this.checkSolution(false);
        });
        this.SwipeDetector.on('swipeRight', () => {
            this.checkSolution(true);
        });
    }

    addGameDisplayDiv(){
        this.parentDiv.appendChild(this.gameDisplay);
    }

    upDateContent(content){
        this.gameDisplay.innerHTML = content;
    }

    addYesButton(buttonDiv){
        buttonDiv.innerHTML ="YES";
        buttonDiv.addEventListener("click", () => this.checkSolution(true));
    }

    addNoButton(buttonDiv){
        buttonDiv.innerHTML ="NO";
        buttonDiv.addEventListener("click", () => this.checkSolution(false));
    }

    addRestartButton(buttonDiv){
        buttonDiv.innerHTML = "RESTART";
        buttonDiv.style.display = "none"; // Initially hidden
        buttonDiv.addEventListener("click", () => {
            this.isPrimeController.startGame();
        });
    }

    checkSolution(boolAnswer){
        this.isPrimeController.answerPressed(boolAnswer);
    }

    gameOver(){        
        this.noButton.style.display = "none";
        this.yesButton.style.display = "none";
        this.upDateContent("GAME OVER");
        this.flashBackground(this.parentDiv, 0, this.colorWrongAnswer);
        setTimeout(() => {
            this.restartButton.style.display = "inline-block";
        }, 800);
        }

    answered(input){
        if (input){
            this.flashBackground(this.parentDiv,400,this.colorRightAnswer);
        } else {
            this.flashBackground(this.parentDiv,400,this.colorWrongAnswer);
        }
    }

    // Duration of 0 changes the background color but does not revert it
    flashBackground(div,duration,color){
        div.style.backgroundColor = color;
        if (duration > 0) {
        setTimeout(() => {
            div.style.background = ""; // Revert to the original background
          }, duration);
        }
    }
}