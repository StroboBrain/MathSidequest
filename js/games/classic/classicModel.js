import QuestionGenerator from "../../../libaries/mathQuestions/questionsGenerator.js";

export default class ClassicModel {
    #taskArray = [];
    #possibleAnswersArray = [];
    // because nextTask() is used to start the game, we start at -1
    #taskIndex = -1;
    #questionGenerator;

    constructor(){
        this.#questionGenerator = new QuestionGenerator(["+"],1,1,200);
        this.#questionGenerator.generateTasks(10);
        this.#taskArray = this.#questionGenerator.getTaskArray();
        this.#generatePossibleAnswerArray();
    }

    #generateTaskArray(){
        this.#questionGenerator.generateTasks(10);
        this.#taskArray = this.#questionGenerator.getTaskArray();
        this.#taskIndex = -1;
    }

    #generatePossibleAnswerArray(){
        for (let task of this.#taskArray) {
            let possibleAnswers = this.#generatePossibleAnswer(task);
            this.#possibleAnswersArray.push(possibleAnswers);
          }
    }

    // Generate more diverse possible answers
    #generatePossibleAnswer(task){
        let solution = task.getSolution();
        let possibleAnswers = [String(solution)];
        let smaller = Math.max(solution - Math.floor(Math.random() * 10) - 1,0);
        possibleAnswers.push(String(smaller));
        let bigger = Math.min(solution + Math.floor(Math.random() * 10) + 1, 200);
        possibleAnswers.push(String(bigger));
        let random = Math.floor(Math.random() * 200);
        possibleAnswers.push(String(random));
        //Shuffle the possible answers
        possibleAnswers = [...possibleAnswers].sort(() => Math.random() - 0.5);

        return possibleAnswers;
    }

    // Public methods
    getTaskArray(){
        return this.#taskArray;
    }

    nextTask(){
        this.#taskIndex++;
        if (this.#taskIndex >= this.#taskArray.length){
            this.#generateTaskArray();
            this.#taskIndex = 0;
        }
        let task = this.#taskArray[this.#taskIndex].getQuestionString();
        return task;
    }

    getPossibleAnswersArray(){
        return this.#possibleAnswersArray[this.#taskIndex];
    }

    checkAnswer(answer){
        let task = this.#taskArray[this.#taskIndex];
        let solution = task.getSolution();
        if (solution == answer){
            return true;
        } 
        return false; 
    }
}