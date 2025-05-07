import ClassicView from "./classicView.js";
import ClassicModel from "./classicModel.js";
import QuestionGenerator from "../../../libaries/mathQuestions/questionsGenerator.js";

export default class ClassicController {
    #classicView;
    #classicModel;
    #questionGenerator;

    constructor(parentDiv){
        this.#classicView = new ClassicView(parentDiv, katex);
        this.#classicModel = new ClassicModel();
        //Prototype only for addition
        this.#questionGenerator = new QuestionGenerator(["+"],1,1,200);
        this.#classicView.updateTask(this.#questionGenerator.getTaskArray()[0].getQuestionString());
    }

    updateTask(){

    }
}