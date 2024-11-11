// Function to generate exponential numbers

function toSuperscript(num) {
    const superscripts = {
        '0': '\u2070',
        '1': '\u00B9',
        '2': '\u00B2',
        '3': '\u00B3',
        '4': '\u2074',
        '5': '\u2075',
        '6': '\u2076',
        '7': '\u2077',
        '8': '\u2078',
        '9': '\u2079'
    };
    return num.toString().split('').map(digit => superscripts[digit] || digit).join('');
}

let base = 2;
let exponent = 3;
let powerString = base + toSuperscript(exponent);
console.log(powerString); // Output: 2³




/**
 * Only working for squares atm
 * 
 * ToDo: Expand to other exponents
 * ToDo: Make more modular
 */
function generateSquareNumbers(rangeMin, rangeMax, exponent) {
    let squares = [];
    
    for (let i = rangeMin; i <= rangeMax; i++) {
        front = "" + i
        for (k = 1; k< exponent;k++){
            front += " · " + i
        }
        upperEx = toSuperscript(exponent)
        front += " = " + i + upperEx + " = "
        squares.push(front + i * i);
    }
    return squares;
}

// Function to display square numbers on the web page
function displaySquareNumbers() {
    //hardcoded for the moment
    let squares = generateSquareNumbers(0,100,2);
    let list = document.getElementById('squareNumbers');
    squares.forEach(number => {
        let listItem = document.createElement('li');
        listItem.textContent = number;
        list.appendChild(listItem);
    });
}

window.onload = displaySquareNumbers;