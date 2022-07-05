let result = 0;

// Math functions
function add(a, b) {
    result = a + b;
}

function subtract(a, b) {
    result = a - b;
}

function multiply(a, b) {
    result = a * b;
}

function divide(a, b) {
    result = a / b;
}

// Call function to choose the math function
function operate(operator, a, b) {
    if (operator === '+') {
        add(a, b);
    }
    else if (operator === '-') {
        subtract(a, b);
    }
    else if (operator === '*') {
        multiply(a, b);
    }
    else (operator === '/') {
        divide(a, b);
    }
}