import NumberSwipeStatisticModel from "./numberSwipeStatisticModel.js";
export default class NumberSwipeModel {
    #minValue;
    #maxValue;
    #numberGenerator;
    #statisticModel;
    

    constructor(minValue, maxValue){
        this.#minValue = minValue;
        this.#maxValue = maxValue;
        this.#numberGenerator = new NumbersToAsk();
        this.#statisticModel = new NumberSwipeStatisticModel();
    }

    #generateRandomNumber(){
        // Better choice of numbers
        return Math.floor(Math.random() * (this.#maxValue - this.#minValue + 1)) + this.#minValue;
    }

    getNextNumber(){
        // Generate a random number between minValue and maxValue
        let number = this.#numberGenerator.getNextNumber();
        return number;
    }

    addLikedNumber(number){
        // Add the number to the statistic model
        this.#statisticModel.addLikedNumber(number);
    }

    getNumberStats(){
        // Return the statistic model
        return this.#statisticModel.getNumberStats();
    }

    getPropertiesStats(){
        return this.#statisticModel.getPropertiesStats();
    }

    getAmountOfNumbersSwiped(){
        return this.#statisticModel.getAmountOfNumbersSwiped();
    }

}

class NumbersToAsk {
    // Numberrange hardcoded to 1-99
    #numbersToAsk = [
        1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
        61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
        81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
        91, 92, 93, 94, 95, 96, 97, 98, 99
    ];
    #askedNumbers = [];

    constructor(){
        this.#numbersToAsk = this.#shuffleArray(this.#numbersToAsk);
    }

    #shuffleArray(array){
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    getNextNumber(){
        if (this.#numbersToAsk.length === 0){
            this.#numbersToAsk = this.#shuffleArray(this.#askedNumbers);
            this.#askedNumbers = [];
        }
        let number = this.#numbersToAsk.pop();
        this.#askedNumbers.push(number);
        return number;
    }
}