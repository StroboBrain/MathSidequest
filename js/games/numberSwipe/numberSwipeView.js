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
            this.#resultDisplay.innerHTML += key + ": " + value + "<br>";
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



// Handles swipe events on the element
class SwipeDetector {
  constructor(element, threshold = 100, allowedTime = 1000) {
    this.element = element || document.documentElement;
    this.threshold = threshold; 
    this.allowedTime = allowedTime;
    this.touchstartX = 0;
    this.touchstartY = 0;
    this.touchendX = 0;
    this.touchendY = 0;
    this.touchStartTime = 0;
    
    this.handlers = {
      swipeLeft: [],
      swipeRight: [],
      swipeUp: [],
      swipeDown: []
    };
    
    this._initEvents();
  }
  
  _initEvents() {
    this.element.addEventListener('touchstart', (e) => {
      const touch = e.changedTouches[0];
      this.touchstartX = touch.pageX;
      this.touchstartY = touch.pageY;
      this.touchStartTime = e.timeStamp;
    }, false);
    
    this.element.addEventListener('touchend', (e) => {
      const touch = e.changedTouches[0];
      this.touchendX = touch.pageX;
      this.touchendY = touch.pageY;
      const elapsedTime = e.timeStamp - this.touchStartTime;
      
      this._handleGesture(elapsedTime);
    }, false);
  }
  
  _handleGesture(elapsedTime) {
    if (elapsedTime > this.allowedTime) return;
    
    const xDiff = this.touchendX - this.touchstartX;
    const yDiff = this.touchendY - this.touchstartY;
    const absXDiff = Math.abs(xDiff);
    const absYDiff = Math.abs(yDiff);
    
    // Check if it's a horizontal swipe (more horizontal than vertical)
    if (absXDiff > absYDiff && absXDiff > this.threshold) {
      if (xDiff < 0) {
        this._triggerHandlers('swipeLeft');
      } else {
        this._triggerHandlers('swipeRight');
      }
    }
    // Optional: vertical swipe detection
    else if (absYDiff > absXDiff && absYDiff > this.threshold) {
      if (yDiff < 0) {
        this._triggerHandlers('swipeUp');
      } else {
        this._triggerHandlers('swipeDown');
      }
    }
  }
  
  _triggerHandlers(type) {
    this.handlers[type].forEach(handler => handler());
  }
  
  on(type, handler) {
    if (this.handlers[type]) {
      this.handlers[type].push(handler);
    }
  }
  
  off(type, handler) {
    if (this.handlers[type]) {
      this.handlers[type] = this.handlers[type].filter(h => h !== handler);
    }
  }
}