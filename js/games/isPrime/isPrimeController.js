import IsPrimeModel from "./isPrimeModel.js";
import { IsPrimeView } from "./isPrimeView.js";

export default class IsPrimeController{

    constructor(divParent){
        this.isPrimeModel = new IsPrimeModel();
        this.isPrimeView = new IsPrimeView(divParent);
        this.createTasks(3,6);
        this.activeTask = this.taskArray.pop();
        this.displayActiveTask();
    }

    isPrime(number) {
        return this.isPrimeModel.isPrime(number);
    }

    createTasks(nonPrimeAmount, primeAmount) {
        this.taskArray = this.isPrimeModel.createTaskArray(3,6);
    }

    nextTask(){
        if (this.taskArray.length===0){
            console.log("game over");
        } else {
            this.activeTask = this.taskArray.pop();
        }
    }

    checkTask(input){
        return (input===isPrimeModel.isPrime(this.activeTask));
    }

    displayActiveTask(){
        this.isPrimeView.upDateContent(this.activeTask);
    }



}