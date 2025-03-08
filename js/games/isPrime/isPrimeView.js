// Creates the html element to display the game

export class IsPrimeView {
    constructor(parentDiv, yesButton, noButton){
        this.parentDiv = parentDiv;
        this.addYesButton(yesButton);
        this.createGameDisplayDiv();
        this.addGameDisplayDiv();
    }

    createGameDisplayDiv(){
        this.gameDisplay = document.createElement("div");
        console.log(this.gameDisplay);
        this.gameDisplay.className = "gameDisplay";
        this.gameDisplay.id = "isPrimeGame";
    }

    addGameDisplayDiv(){
        this.parentDiv.appendChild(this.gameDisplay);
    }

    upDateContent(content){
        this.gameDisplay.innerHTML = content;
    }

    addYesButton(buttonDiv){
        buttonDiv.innerHTML ="yes";
        buttonDiv.addEventListener("click", () => this.checkSolution(true));
    }

    checkSolution(boolAnswer){
        console.log("yes");
    }

}