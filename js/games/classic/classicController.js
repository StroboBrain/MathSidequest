import ClassicView from "./classicView.js";
import ClassicModel from "./classicModel.js";

export default class ClassicController {
    #classicView;
    #classicModel;

    constructor(parentDiv){
        this.#classicView = new ClassicView(parentDiv);
        this.#classicModel = new ClassicModel();
    }

}