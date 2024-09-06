let num1, num2;

function generateProblem() {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    document.getElementById('problem').innerText = `${num1} + ${num2} = ?`;
}

function checkAnswer() {
    const answer = parseInt(document.getElementById('answer').value);
    const result = document.getElementById('result');
    if (answer === num1 + num2) {
        result.innerText = 'Correct!';
        result.style.color = 'green';
    } else {
        result.innerText = 'Incorrect, try again.';
        result.style.color = 'red';
    }
    document.getElementById('answer').value = '';
    generateProblem();
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('fallingButton');
    let topPosition = 0;

    function fall() {
        if (topPosition < window.innerHeight - button.offsetHeight) {
            topPosition += 5; // Adjust the speed of falling
            button.style.top = topPosition + 'px';
            requestAnimationFrame(fall);
        }
    }
    requestAnimationFrame(fall);

    button.addEventListener('click', () => {
        requestAnimationFrame(fall);
    });
});

window.onload = generateProblem;


