// Function to generate exponential numbers

/**
 * 
 * @param {*} num 
 * num: int and 0<=num<=9
 * @returns the string for the exponent: Example ³
 * 
 */

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
    let list = document.getElementById('squareNumbers'); // Has to be included in the html page
    squares.forEach(number => {
        let listItem = document.createElement('li');
        listItem.textContent = number;
        list.appendChild(listItem);
    });
}

/**
 * 
 * @param {*} power 
 * @param {*} minRange 
 * @param {*} maxRange
 * @param {*} numberOfTasks
 */
function generateTasks(power, minRange, maxRange, numberOfTasks){
    let tasks = [];
    let increase = Math.floor((maxRange-minRange)/10);
    if (increase<=1){
        console.log("generateTask Times",times);
    }

    for (k = minRange; k<=maxRange;k++){
        tasks.push(k,Math.pow(k,power));
    }

    
}


window.onload = displaySquareNumbers;