// Generates different types of math questions
// Currently only addition is supported, needs mayjor rework
import AdditionGenerator from "./additionGenerator.js";

export default class QuestionGenerator {
    #operations;
    #numberOfOperands;
    #minRange;
    #maxRange;
    #taskArray = [];
    #operationGenerators = [];

    constructor(operations, numberOfOperands, minRange, maxRange) {
        this.#operations = operations;
        this.#numberOfOperands = numberOfOperands;
        this.#minRange = minRange;
        this.#maxRange = maxRange;
        this.#generateOperationsGenerators();
        this.generateTasks();
    }

    generateTasks(amountOfTasks = 1) {
        let taskGenerator = this.#operationGenerators[0]; // Currently only one operation is supported
        for (let i = 0; i < amountOfTasks; i++) {
            let task = taskGenerator.generateQuestionInRange();
            this.#taskArray.push(task);
        }
    }

    #generateOperationsGenerators(){
        // Currently only addition is supported
        this.#operationGenerators.push(new AdditionGenerator(this.#minRange, this.#maxRange));
    }

    getTaskArray() {
        return this.#taskArray;
    }
}