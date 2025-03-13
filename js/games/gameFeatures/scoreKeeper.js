export default class ScoreKeeper{

    #onNoLives;
    #startingLives;
    #lifeLossDefaultIncrement = -1;
    #lives;
    #wrongAnswers = 0;
    #rightAnswers = 0;

    constructor(startingLives, onNoLives){
        // Test if onNoLives is indeed a function
        this.#checkIfFunction(onNoLives);
        this.#onNoLives = onNoLives;
        this.#startingLives = startingLives;
        this.#lives = startingLives;
    }

    incrementWrongAnswers(amount=1){
        this.#wrongAnswers += amount;
    }

    incrementRightAnswers(amount=1){
        this.#rightAnswers += amount;
    }

    changeLives(amount = this.#lifeLossDefaultIncrement){
        // Default is to decrease the lives
        this.#lives += amount; 

        //Invoke noLives if the lives run out
        if (!this.livesLeft()){
            this.#callNoLives();
        }
    }

    resetLives(){
        this.#lives = this.#startingLives;
    }

    livesLeft(){
        return this.#lives>0;
    }

    #callNoLives(){
        this.#onNoLives();
    }

    #checkIfFunction(onNoLives){
        if (typeof onNoLives !== "function") {
            throw new Error("onNoLives must be a function");
        }
    }

    getLives(){
        return this.#lives;
    }

    getWrongAnswers(){
        return this.#wrongAnswers;
    }

    getRightAnswers(){
        return this.#rightAnswers;
    }
}
