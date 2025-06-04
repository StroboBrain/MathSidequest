export default class SwipeDetector {

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