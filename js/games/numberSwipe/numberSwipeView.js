import SwipeDetector from "../gameFeatures/swipeDetector.js";
export default class NumberSwipeView {
    #parentDiv;
    #processSwipe;
    #numberDisplay;
    #swipeButtonDisplay;
    #resultDisplay;
    #swipeDetector;
    #statsToHtmlConverter;

    constructor(parentDiv, processSwipe){
        this.#parentDiv = parentDiv;
        this.#setUpDisplay();
        this.#processSwipe = processSwipe;
        this.#swipeDetector = new SwipeDetector(null, 100, 1000);
        this.#setUpSwipeDetector();
        this.#statsToHtmlConverter = new StatsToHtmlConverter(this.#parentDiv);

    }

    #setUpDisplay(){
        this.#numberDisplay = this.#createNumberDisplay();
        this.#swipeButtonDisplay = this.#createSwipeButtonDisplay();
        this.#addButtons(this.#swipeButtonDisplay);
        this.#addChild(this.#numberDisplay);
        this.#addChild(this.#swipeButtonDisplay);
        this.#addArrowkeyListeners();
    }

    #setUpSwipeDetector(){
        this.#swipeDetector.on('swipeLeft', () => {
        this.#swipeEvent(false);
        });

        this.#swipeDetector.on('swipeRight', () => {
        this.#swipeEvent(true);
        });

    }


    #addChild(child){
        this.#parentDiv.appendChild(child);
    }

    #createNumberDisplay(){
        let numberDisplay = document.createElement("div");
        numberDisplay.className = "numberDisplay";
        numberDisplay.id = "numberDisplay";
        return numberDisplay;
    }
    #createSwipeButtonDisplay(){
        let swipeButtonDisplay = document.createElement("div");
        swipeButtonDisplay.className = "swipeButtonDisplay";
        swipeButtonDisplay.id = "swipeButtonDisplay";

        return swipeButtonDisplay;
    }

    #addButtons(parentDiv){
        let leftButton = this.#createButton("leftButton", "swipeButton defaultButtonStyle");
        leftButton.innerHTML = "✖";
        leftButton.onclick = () => {
            this.#swipeEvent(false);
        };

        let rightButton = this.#createButton("rightButton", "swipeButton defaultButtonStyle");
        rightButton.innerHTML = "♡";
        rightButton.onclick = () => {
            this.#swipeEvent(true);
        };
        parentDiv.appendChild(leftButton);
        parentDiv.appendChild(rightButton);
    }

    #createButton(id, className){
        let button = document.createElement("button");
        button.className = className; 
        button.id = id;
        return button;
    }


    #buttonFlashBackground(button, className){
        button.classList.add(className);
        setTimeout(() => {
            button.classList.remove(className);
        }, 700);
    }

    #addArrowkeyListeners(){
        document.addEventListener('keydown', (event) => {
            let boolValue;
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                if (event.key === "ArrowLeft"){
                    boolValue = false;
                } else boolValue = true;
                this.#swipeEvent(boolValue);
            }

        });    
    }

    #swipeEvent(booleanValue){
        // left = false
        if (booleanValue){
            this.#buttonFlashBackground(this.#swipeButtonDisplay.children[1], "rightButtonPressFeedback");
        } else {
            this.#buttonFlashBackground(this.#swipeButtonDisplay.children[0], "leftButtonPressFeedback");
        }
        this.#processSwipe(booleanValue);
    }

    displayStatistic(statistic){
        this.#statsToHtmlConverter.paintDivs(statistic);
    }
    
    updateNumberDisplay(number){
        this.#numberDisplay.innerHTML = number;
    }
}


class StatsToHtmlConverter {
    #parentDiv;
    #resultDisplay;

    constructor(parentDiv){
        this.#parentDiv = parentDiv;
        this.#resultDisplay = this.#createResultDisplay();
        this.#parentDiv.appendChild(this.#resultDisplay);
    }


    // statistic is a javascript map
    paintDivs(statistic){
        this.#resultDisplay.classList.add("visibleResultDisplay");
        this.#resultDisplay.innerHTML = "";

        for (const [key, value] of statistic) {
            this.#resultDisplay.innerHTML += " " + key + ": " + value + "<br>";
          }
    }

    #createResultDisplay(){
        let resultDisplay = document.createElement("div");
        resultDisplay.className = "resultDisplay";
        resultDisplay.id = "resultDisplay";
        resultDisplay.onclick = () => {
           resultDisplay.classList.remove("visibleResultDisplay");
        };
        return resultDisplay;
    }

    #createRow(name, value){
        let row = this.#createDiv(name, "row");
        let nameDiv = this.#createDiv(name, "name");
        nameDiv.innerHTML = name;
        let valueDiv = this.#createDiv(value, "value");
        valueDiv.innerHTML = value;
        row.appendChild(nameDiv);
        row.appendChild(valueDiv);
        return row;
    }

    #createDiv(id, className){
        let div = document.createElement("div");
        div.className = className; 
        div.id = id;
        return div;
    }

}


