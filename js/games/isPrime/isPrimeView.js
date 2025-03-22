// Creates the html element to display the game

export default class IsPrimeView {
    constructor(titleDiv, parentDiv, yesButton, noButton, isPrimeController){
        this.isPrimeController = isPrimeController;
        this.titleDiv = titleDiv;
        this.parentDiv = parentDiv;
        this.yetButton = yesButton;
        this.noButton = noButton;
        this.createGameDisplayDiv();
        this.colorWrongAnswer = "#c20a28";
        this.colorRightAnswer = "#1e7e34";
    }

    setTitleDiv(){
        this.titleDiv.innerHTML = "IS IT PRIME?"
    }

    setUpDisplay(){
        this.addYesButton(this.yetButton);
        this.addNoButton(this.noButton);
        this.addGameDisplayDiv();
        this.setTitleDiv();
    }

    createGameDisplayDiv(){
        this.gameDisplay = document.createElement("div");
        this.gameDisplay.className = "gameDisplay";
        //this.gameDisplay.style.display = "none";
        this.gameDisplay.id = "isPrimeGame";
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

    checkSolution(boolAnswer){
        this.isPrimeController.answerPressed(boolAnswer);
    }

    gameOver(){
        this.upDateContent("GAME OVER");
    }

    answered(input){
        if (input){
            this.flashBackground(this.parentDiv,400,this.colorRightAnswer);
        } else {
            this.flashBackground(this.parentDiv,400,this.colorWrongAnswer);
        }
    }

    flashBackground(div,duration,color){
        div.style.backgroundColor = color;
        setTimeout(() => {
            div.style.background = ""; // Revert to the original background
          }, duration);

    }

}