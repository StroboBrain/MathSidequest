import IsPrimeModel from "./isPrimeModel.js";
import { IsPrimeView } from "./isPrimeView.js";

export default class IsPrimeController{

    constructor(titleDiv, divParent, yesButton, noButton, taskArguments){
        // create needed objects
        this.isPrimeModel = new IsPrimeModel();
        this.isPrimeView = new IsPrimeView(titleDiv,divParent,yesButton,noButton,this);

        // Represention the game state

        this.gameIsRunning = false;
        this.taskArguments = taskArguments;
        // load values from the taskArguments

        this.setTaskArguments(taskArguments);

        this.createTasks();

        //set the first default task
        this.activeTask = this.taskArray.pop();
        this.displayActiveTask();
    }

    setTaskArguments(taskArguments){
        this.numberOfPrimes = taskArguments[0];
        this.numberOfNonPrimes = taskArguments[1];
        this.numberOfLives = taskArguments[2];
    }

    isPrime(number) {
        return this.isPrimeModel.isPrime(number);
    }

    createTasks() {        
        this.taskArray = this.isPrimeModel.createTaskArray(this.numberOfPrimes,this.numberOfNonPrimes);
    }

    startGame(){
        createTasks();
        this.lives = this.taskArguments[2];
        this.gameIsRunning = true;
    }




    nextTask(){
        if (this.isGameOver()){
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
        this.gameIsRunning = false;
        this.createTasks();
        this.isPrimeView.disableGameButtons();
    }

    isGameOver(){
        // No more lifes
        if (this.numberOfLives===0) return true;
        // All numbers answered
        else if (this.taskArray.length===0) return true;
        return false;
    }



}