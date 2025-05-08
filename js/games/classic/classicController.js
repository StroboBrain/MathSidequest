import ClassicView from "./classicView.js";
import ClassicModel from "./classicModel.js";

export default class ClassicController {
    #classicView;
    #classicModel;

    constructor(parentDiv, katex){
        this.#classicView = new ClassicView(parentDiv, katex);
        this.#classicModel = new ClassicModel();
        this.nextTask();
    }

    nextTask(){
        let currentTask = this.#classicModel.nextTask();
        this.#classicView.updateTask(currentTask);
        let possibleAnswers = this.#classicModel.getPossibleAnswersArray();
        this.#classicView.updateAnswerButtons(possibleAnswers);
    }
}