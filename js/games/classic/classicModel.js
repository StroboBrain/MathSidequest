import QuestionGenerator from "../../../libaries/mathQuestions/questionsGenerator.js";

export default class ClassicModel {
    #taskArray = [];
    #possibleAnswersArray = [];
    #taskIndex = -1;
    #questionGenerator;

    constructor(){
        this.#questionGenerator = new QuestionGenerator(["+"],1,1,200);
        this.#taskArray = this.#questionGenerator.getTaskArray();
        this.#generatePossibleAnswerArray();
    }

    #generateTaskArray(amountOfTasks){
        let taskArray = [];
        for (let i = 0; i < amountOfTasks; i++){
            taskArray.push(this.#generateTask());
        }
        return taskArray;
    }

    #generateTask(){
        // Currently only addition is supported
        return new AdditionGenerator(1, 200).generateQuestionInRange();
    }

    getTaskArray(){
        return this.#taskArray;
    }

    nextTask(){
        this.#taskIndex++;
        if (this.#taskIndex >= this.#taskArray.length){
            console.log("Error, No more tasks available");
        }
        let task = this.#taskArray[this.#taskIndex].getQuestionString();
        return task;
    }

    #generatePossibleAnswerArray(){
        for (let task of this.#taskArray) {
            let possibleAnswers = this.#generatePossibleAnswer(task);
            this.#possibleAnswersArray.push(possibleAnswers);
            console.log(possibleAnswers);
          }
    }

    #generatePossibleAnswer(task){
        let solution = task.getSolution();
        let possibleAnswers = [String(solution)];

        let smaller = Math.max(solution - Math.floor(Math.random() * 10) - 1,0);
        possibleAnswers.push(String(smaller));
        let bigger = Math.min(solution + Math.floor(Math.random() * 10) + 1, 200);
        possibleAnswers.push(String(bigger));
        let random = Math.floor(Math.random() * 200);
        possibleAnswers.push(String(random));

        return possibleAnswers;
    }

    getPossibleAnswersArray(){
        return this.#possibleAnswersArray[this.#taskIndex];
    }

        




}