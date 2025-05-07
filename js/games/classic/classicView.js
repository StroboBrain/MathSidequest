// Creates the html element to display the game


export default class ClassicView {
    #parentDiv;
    #taskDisplay;
    #katex;
    #currentTask = "3+4";
    
    constructor(parentDiv, katex){
        this.#katex = katex;
        this.#parentDiv = parentDiv;
        this.#setUpDisplay();
        this.#renderTask();
    }

    #setUpDisplay(){
        this.#taskDisplay = this.#createTaskDisplay();
        this.#addChild(this.#taskDisplay);
        this.#addChild(this.#createAnswerDisplay());
    }

    #createGameDisplayDiv(){
        let gameDisplay = document.createElement("div");
        gameDisplay.className = "gameDisplay";
        //this.gameDisplay.style.display = "none";
        gameDisplay.id = "classicGame";
        return gameDisplay;
    }

    #createTaskDisplay(){
        let taskDisplay = document.createElement("div");
        taskDisplay.className = "taskDisplay";
        //this.gameDisplay.style.display = "none";
        taskDisplay.id = "taskDisplay";
        return taskDisplay;
    }

    #createAnswerDisplay(){
        let answerDisplay = document.createElement("div");
        answerDisplay.className = "answerDisplay";
        //this.gameDisplay.style.display = "none";
        answerDisplay.id = "answerDisplay";
        this.#addButtons(answerDisplay);
        return answerDisplay;
    }

    addGameDisplayDiv(){
        this.parentDiv.appendChild(this.gameDisplay);
    }

    #appendDivToParent(divToAdd){
        this.#parentDiv.appendChild(divToAdd);
    }

    upDateContent(centerContent, answerArray){
        this.gameDisplay.innerHTML = content;
    }


    #addChild(child){
        this.#parentDiv.appendChild(child);
    }

    #addButtons(parentDiv){
        for (let i = 0; i < 4; i++){
            let button = this.#createButton("answerButton_"+i, "answerButton defaultButtonStyle");
            parentDiv.appendChild(button);
        }
    }

    #createButton(id, className){
        let button = document.createElement("button");
        button.className = className; 
        button.id = id;
        return button;
    }

    #renderTask(){
        this.#katex.render(this.#currentTask, this.#taskDisplay);
    }

    updateTask(task){
        this.#currentTask = task;
        this.#renderTask();
    }
}