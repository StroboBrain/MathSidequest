// Creates the html element to display the game

export class IsPrimeView {
    constructor(titleDiv, parentDiv, yesButton, noButton, isPrimeController){
        this.isPrimeController = isPrimeController;
        this.titleDiv = titleDiv;
        this.parentDiv = parentDiv;
        this.addYesButton(yesButton);
        this.addNoButton(noButton);
        this.createGameDisplayDiv();
        this.addGameDisplayDiv();
        this.setTitleDiv();
    }

    setTitleDiv(){
        this.titleDiv.innerHTML = "IS IT PRIME?"
    }

    createGameDisplayDiv(){
        this.gameDisplay = document.createElement("div");
        this.gameDisplay.className = "gameDisplay";
        this.gameDisplay.id = "isPrimeGame";
    }

    addGameDisplayDiv(){
        this.parentDiv.appendChild(this.gameDisplay);
    }

    upDateContent(content){
        console.log(content);
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
            this.flashBackground(this.parentDiv,400,"green");
        } else {
            this.flashBackground(this.parentDiv,400,"red");
        }
    }

    flashBackground(div,duration,color){
        div.style.backgroundColor = color;
        setTimeout(() => {
            div.style.background = ""; // Revert to the original background
          }, duration);

    }

}