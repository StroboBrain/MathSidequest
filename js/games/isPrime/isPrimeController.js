import IsPrimeModel from "./isPrimeModel.js";
import { IsPrimeView } from "./isPrimeView.js";

export default class IsPrimeController{

    constructor(divParent, yesButton, noButton, taskArguments){
        this.isPrimeModel = new IsPrimeModel();
        this.isPrimeView = new IsPrimeView(divParent,yesButton,noButton,this);
        this.taskArguments = taskArguments;
        // Default value
        this.createTasks();
        this.activeTask = this.taskArray.pop();
        this.displayActiveTask();
    }

    isPrime(number) {
        return this.isPrimeModel.isPrime(number);
    }

    createTasks() {        
        this.taskArray = this.isPrimeModel.createTaskArray(this.taskArguments[0],this.taskArguments[1]);
    }

    nextTask(){
        if (this.taskArray.length===0){

            this.gameOver();
        } else {
            this.activeTask = this.taskArray.pop();
            this.displayActiveTask();
        }
    }

    checkAnswer(input){
        return (input===this.isPrimeModel.checkIfPrime(this.activeTask));
    }

    displayActiveTask(){
        this.isPrimeView.upDateContent(this.activeTask);
    }

    answerPressed(boolAnswer){
        if (this.checkAnswer(boolAnswer)){
            this.isPrimeView.answered(true);
        } else this.isPrimeView.answered(false);

        this.nextTask();
    }

    gameOver(){
        this.isPrimeView.gameOver();
        this.createTasks();
    }



}