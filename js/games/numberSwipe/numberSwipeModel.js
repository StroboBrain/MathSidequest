export default class NumberSwipeModel {
    #minValue;
    #maxValue;

    constructor(minValue, maxValue){
        this.#minValue = minValue;
        this.#maxValue = maxValue;
    }

    #generateRandomNumber(){
        // Better choice of numbers
        return Math.floor(Math.random() * (this.#maxValue - this.#minValue + 1)) + this.#minValue;
    }

    getNextNumber(){
        // Generate a random number between minValue and maxValue
        let number = this.#generateRandomNumber();
        return number;
    }

}