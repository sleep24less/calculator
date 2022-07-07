class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    // Clears display
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    // Deletes last number in current display
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    // Adds number to current display
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    // Sets an operation to perform in the compute function
    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    // Performs the math equation depending on the operation set
    compute() {
        let result;
        let prev = parseFloat(this.previousOperand);
        let current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                result = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = '';
    }

    // Adds commas every 3rd number and displays decimal numbers correctly
    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerNumbers = parseFloat(stringNumber.split('.')[0]);
        const decimalNumbers = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerNumbers)) {
            integerDisplay = '';
        }
        else {
            integerDisplay = integerNumbers.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalNumbers != null) {
            return `${integerDisplay}.${decimalNumbers}`
        }
        else {
            return integerDisplay;
        }
    }

    // Updates the current and/or previous display
    updateDisplay() {
        this.currentOperandTextElement.textContent = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandTextElement.textContent =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        }
        else {
            this.previousOperandTextElement.textContent = '';
        }
    }
}
// Buttons
const numberButtons = document.querySelectorAll('.num_button');
const operationButtons = document.querySelectorAll('.op_button');
const equalsButton = document.querySelector('#equal');
const deleteButton = document.querySelector('#delete');
const resetButton = document.querySelector('#reset');

// Screen
const previousOperandTextElement = document.querySelector('#previous_operand');
const currentOperandTextElement = document.querySelector('#current_operand');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// Button event listeners
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.textContent);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.textContent);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

resetButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})
