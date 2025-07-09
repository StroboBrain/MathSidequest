import IsPrimeModel from "./isPrimeModel.js";
import IsPrimeView from "./isPrimeView.js";

export default class IsPrimeController{

    constructor(titleDiv, divParent, yesButton, noButton, restartButton, taskArguments){
        // create needed objects
        this.isPrimeModel = new IsPrimeModel();
        this.isPrimeView = new IsPrimeView(titleDiv,divParent,yesButton,noButton, restartButton,this);
        // Represention the game state
        this.gameIsRunning = false;
        this.taskArguments = taskArguments;
        // load values from the taskArguments
        this.setTaskArguments(taskArguments);
        this.createTasks();
        this.isPrimeView.setUpDisplay();
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

    hasTasks(){
        return this.taskArray.length > 0;
    }

    startGame(){
        // Set the lives to the start amount
        this.numberOfLives = this.taskArguments[2];
        this.gameIsRunning = true;
        this.prepareNextTask();
        this.isPrimeView.startGame(this.activeTask);
    }

    prepareNextTask(){
        // Enless creating tasks
        if (!this.hasTasks()) {
            this.createTasks();
        }
        this.setActiveTask();
    }

    setActiveTask(){
        this.activeTask = this.taskArray.pop();
    }

    nextTask(){
        this.prepareNextTask();
        this.displayActiveTask();
    }

    isGameRunning(){
        return this.gameIsRunning;
    }

    checkAnswer(input){
        // If the game is not running, ignore the input
        if (!this.gameIsRunning) {
            return;
        }
        return (input==this.isPrimeModel.checkIfPrime(this.activeTask));
    }

    displayActiveTask(){
        this.isPrimeView.upDateContent(this.activeTask);
    }

    answerPressed(boolAnswer){
        if (this.checkAnswer(boolAnswer)){
            this.isPrimeView.answered(true);
        } else {
            this.numberOfLives--;
            if (this.isGameOver()){
                this.gameOver();
                return;
            }
            this.isPrimeView.answered(false);
        }
        this.nextTask();
    }

    gameOver(){
        this.gameIsRunning = false;
        // Changes the yes and no buttons to restart button
        this.isPrimeView.gameOver();
    }

    isGameOver(){
        // No more lifes
        if (this.numberOfLives<=0) return true;
        return false;
    }
}