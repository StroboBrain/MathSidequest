import IsPrimeModel from "./isPrimeModel.js";
import { IsPrimeView } from "./isPrimeView.js";

export default class IsPrimeController{

    constructor(divParent, yesButton, noButton){
        this.isPrimeModel = new IsPrimeModel();
        this.isPrimeView = new IsPrimeView(divParent,yesButton,noButton);
        // Default value
        this.createTasks(3, 6);
        this.activeTask = this.taskArray.pop();
        this.displayActiveTask();
    }

    isPrime(number) {
        return this.isPrimeModel.isPrime(number);
    }

    createTasks(primeAmount, nonPrimeAmount) {
        this.taskArray = this.isPrimeModel.createTaskArray(primeAmount,nonPrimeAmount);
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