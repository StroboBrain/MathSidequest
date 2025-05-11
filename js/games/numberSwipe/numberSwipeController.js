import NumberSwipeView from "./numberSwipeView.js";
import NumberSwipeModel from "./numberSwipeModel.js";

export default class NumberSwipeController {
    #numberSwipeView;
    #numberSwipeModel;

    constructor(parentDiv,minValue,maxValue){
        this.#numberSwipeView = new NumberSwipeView(parentDiv, this.#processSwipe.bind(this));
        this.#numberSwipeModel = new NumberSwipeModel(minValue, maxValue);
        this.#askNumber();
    }

    #processSwipe(swipeDirection){
        // false = left, true = right
        this.#askNumber();
    }

    #askNumber(){
        let number = this.#numberSwipeModel.getNextNumber();
        this.#numberSwipeView.updateNumberDisplay(number);
    }


}