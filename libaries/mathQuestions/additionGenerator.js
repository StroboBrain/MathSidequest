import PrimitiveQuestionObject from "./primitiveQuestionObject.js";

export default class AdditionGenerator {
    constructor(min, max){
        this.min = min;
        this.max = max;
    }

    generateQuestionInRange(){
        let firstNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        let secondNumber = Math.floor(Math.random()*(this.max - firstNumber));
        return new PrimitiveQuestionObject(firstNumber, secondNumber, "+", firstNumber + secondNumber);
    }

    // Get a specific addition with a target number
    generateQuestionWithTarget(target){
        let firstNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        let secondNumber = target - firstNumber;
        return new PrimitiveQuestionObject(firstNumber, secondNumber, "+", target);
    }

}