export default class NumberSwipeView {
    #parentDiv;
    #processSwipe;
    #numberDisplay;
    #swipeButtonDisplay;
    #resultDisplay;
    #swipeHandler;

    constructor(parentDiv, processSwipe){
        this.#parentDiv = parentDiv;
        this.#setUpDisplay();
        this.#processSwipe = processSwipe;
        this.#swipeHandler = new SwipeHandler(this.#swipeButtonDisplay, this.#processSwipe);
    }

    #setUpDisplay(){
        this.#numberDisplay = this.#createNumberDisplay();
        this.#swipeButtonDisplay = this.#createSwipeButtonDisplay();
        this.#resultDisplay = this.#createResultDisplay();
        this.#addButtons(this.#swipeButtonDisplay);
        this.#addChild(this.#numberDisplay);
        this.#addChild(this.#swipeButtonDisplay);
        this.#addChild(this.#resultDisplay);
        this.#addArrowkeyListeners();
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
    #createResultDisplay(){
        let resultDisplay = document.createElement("div");
        resultDisplay.className = "resultDisplay";
        resultDisplay.id = "resultDisplay";
        return resultDisplay;
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

    updateNumberDisplay(number){
        this.#numberDisplay.innerHTML = number;
    }



    #buttonFlashBackground(button, className){
        button.classList.add(className);
        setTimeout(() => {
            console.log("button pressed");

            button.classList.remove(className);
        }, 1500);
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
}




// Handles swipe events on the element
class SwipeHandler {
    constructor(element, callback) {
        this.element = element;
        this.callback = callback;
        this.startX = 0;
        this.startY = 0;
        this.endX = 0;
        this.endY = 0;

        this.element.addEventListener('touchstart', (event) => this.handleTouchStart(event), false);
        this.element.addEventListener('touchmove', (event) => this.handleTouchMove(event), false);
        this.element.addEventListener('touchend', (event) => this.handleTouchEnd(event), false);
    }
}