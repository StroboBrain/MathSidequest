//adds a number to the inner html of a button
function addNumber(button, number){
  button.innerHtml = number;
}

class MovingButton {
  constructor(buttonId, speedY, speedX) {
    this.button = document.getElementById(buttonId);
    this.speedY = speedY;
    this.speedX = speedX;
    this.directionX = 1;

    // Set initial position to the top center of the container
    this.posY = 0;
    this.posX = (this.button.parentElement.clientWidth - this.button.offsetWidth) / 2;

    // Apply initial position
    this.button.style.top = this.posY + 'px';
    this.button.style.left = this.posX + 'px';
  }

  moveButton() {
    this.posY += this.speedY;

    // Oscillating the button left and right
    this.posX += this.speedX * this.directionX;
    if (this.posX > this.button.parentElement.clientWidth - this.button.offsetWidth || this.posX < 0) {
      this.directionX *= -1; // change direction if hitting the edges
    }

    // Apply new position
    this.button.style.top = this.posY + 'px';
    this.button.style.left = this.posX + 'px';

    // Reset the position if it reaches the bottom
    if (this.posY > this.button.parentElement.clientHeight - this.button.offsetHeight) {
      this.posY = 0;
    }

    requestAnimationFrame(this.moveButton.bind(this)); // continue animation
  }

  start() {
    requestAnimationFrame(this.moveButton.bind(this));
  }
}

class MathQuestion {
  constructor() {
    this.num1 = this.generateNumber();
    this.num2 = this.generateNumber();
    this.question = `${this.num1} + ${this.num2}`;
    this.answer = this.num1 + this.num2;
  }

  generateNumber() {
    return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
  }

  checkAnswer(userAnswer) {
    return userAnswer === this.answer;
  }

  getQuestion() {
    return this.question;
  }
}

//adds a number to the inner html of a button
function addNumber(button, number){
  button.innerHTML = number;
}









// Start the animation when the DOM is fully loaded
window.onload = () => {
  const movingButton = new MovingButton('movingButton', 2, 3);
  buttonTemp = document.getElementById("movingButton");
  addNumber(buttonTemp,3);
  movingButton.start();
};
