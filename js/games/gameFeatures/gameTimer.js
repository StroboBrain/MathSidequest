// Gametimer to keep track of the passed time in a game

export default class GameTimer{

    constructor(){
        this.startTime;
        this.endTime;
        this.passedTime;
    }

    passedTime(){
        this.currentTime = performance.now();
        return this.currentTime-this.startTime;
    }

    endTimer(){
        this.endTime = performance.now();
        this.passedTime = this.endTime-this.startTime;
    }

    startTimer(){
        this.startTime = performance.now();
    }

    


}
