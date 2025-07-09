import NumberSwipeView from "./numberSwipeView.js";
import NumberSwipeModel from "./numberSwipeModel.js";
import DataSaver from "../gameFeatures/dataSaver.js";

export default class NumberSwipeController {
    #numberSwipeView;
    #numberSwipeModel;
    #currentNumber;
    #dataSaver;

    constructor(parentDiv,minValue,maxValue){
        this.#dataSaver = new DataSaver();
        let savedData = this.#dataSaver.loadData("numberSwipe");
        this.#numberSwipeView = new NumberSwipeView(parentDiv, this.#processSwipe.bind(this));
        this.#numberSwipeModel = new NumberSwipeModel(minValue, maxValue, savedData);
        this.#askNumber();
    }

    #processSwipe(swipeDirection){
        // false = left, true = right
        if (swipeDirection){
            this.#numberSwipeModel.addLikedNumber(this.#currentNumber);
            this.#dataSaver.saveData("numberSwipe", this.#numberSwipeModel.getNumberStats());
            if (this.#numberSwipeModel.getAmountOfNumbersSwiped()%10===0 && this.#numberSwipeModel.getAmountOfNumbersSwiped() > 0){
                let propertiesStats = this.#numberSwipeModel.getPropertiesStats();
                this.#numberSwipeView.displayStatistic(propertiesStats);
        }
        } else {
            // TODO: Add disliked number functionality
        }
        // Get next number ready
        this.#askNumber();
    }

    #askNumber(){
        this.#currentNumber = this.#numberSwipeModel.getNextNumber();
        this.#numberSwipeView.updateNumberDisplay(this.#currentNumber);
    }
}