import ClassicView from "./classicView.js";
import ClassicModel from "./classicModel.js";

export default class ClassicController {
    #classicView;
    #classicModel;

    constructor(parentDiv, katex){
        const checkAnswer = this.checkAnswer.bind(this);
        this.#classicModel = new ClassicModel();
        this.#classicView = new ClassicView(parentDiv, katex, checkAnswer);
        this.nextTask();
    }

    nextTask(){
        let currentTask = this.#classicModel.nextTask();
        this.#classicView.updateTask(currentTask);
        let possibleAnswers = this.#classicModel.getPossibleAnswersArray();
        this.#classicView.updateAnswerButtons(possibleAnswers);
    }

    checkAnswer(answer){
        let isCorrect = this.#classicModel.checkAnswer(answer);
        if (isCorrect){
            this.#rightAnswer();
        } else {
            this.#wrongAnswer();
        }
        this.nextTask();
    }
    

    #rightAnswer(){
        this.#classicView.rightAnswer();
    }

    #wrongAnswer(){
        this.#classicView.wrongAnswer();
    }

}