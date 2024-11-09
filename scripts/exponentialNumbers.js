// Function to generate square numbers
function generateSquareNumbers(n) {
    let squares = [];
    for (let i = 1; i <= n; i++) {
        squares.push(`${i} * ${i} = ${i * i}`);
    }
    return squares;
}

// Function to display square numbers on the web page
function displaySquareNumbers() {
    let squares = generateSquareNumbers(100);
    let list = document.getElementById('squareNumbers');
    squares.forEach(number => {
        let listItem = document.createElement('li');
        listItem.textContent = number;
        list.appendChild(listItem);
    });
}

window.onload = displaySquareNumbers;