// Creates the html element to display the game


export default class ClassicView {
    #parentDiv;
    #taskDisplay;
    #taskFeedbackDisplay;
    #answerDisplay;
    #katex;
    #currentTask = "3+4";
    #checkAnswer;
    
    constructor(parentDiv, katex, checkAnswer){
        this.#katex = katex;
        this.#parentDiv = parentDiv;
        this.#setUpDisplay();
        this.#renderTask();
        this.#checkAnswer = checkAnswer;
    }

    #setUpDisplay(){
        this.#taskDisplay = this.#createTaskDisplay();
        this.#answerDisplay = this.#createAnswerDisplay();
        this.#taskFeedbackDisplay = this.#createTaskFeedbackDisplay();
        this.#addChild(this.#taskDisplay);
        this.#addChild(this.#answerDisplay);
        this.#addChild(this.#taskFeedbackDisplay);
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
        taskDisplay.id = "taskDisplay";
        return taskDisplay;
    }

    #createAnswerDisplay(){
        let answerDisplay = document.createElement("div");
        answerDisplay.className = "answerDisplay";
        answerDisplay.id = "answerDisplay";
        this.#addButtons(answerDisplay);
        return answerDisplay;
    }

    #createTaskFeedbackDisplay(){
        let taskFeedbackDisplay = document.createElement("div");
        taskFeedbackDisplay.className = "taskFeedbackDisplay";
        taskFeedbackDisplay.id = "taskFeedbackDisplay";
        return taskFeedbackDisplay;

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
            button.onclick = () => {
                let answer = button.innerHTML;
                this.#checkAnswer(answer);
            };
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
        this.#hideTaskFeedback();
    }

    updateAnswerButtons(possibleAnswers){
        for (let i = 0; i < possibleAnswers.length; i++){
            let button = document.getElementById("answerButton_"+i);
            button.innerHTML = possibleAnswers[i];
        }
    }

    rightAnswer(){
        this.#taskFeedbackDisplay.classList.add("taskFeedbackTrue");
    }

    wrongAnswer(){
        this.#taskFeedbackDisplay.classList.add("taskFeedbackFalse");
    }

    #hideTaskFeedback(){
        // Set class to hidden default
        this.#taskFeedbackDisplay.className = "taskFeedbackDisplay";     
    }
}