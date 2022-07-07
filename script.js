class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.textContent = this.currentOperand;
    }
}
// Buttons
const numberButtons = document.querySelectorAll('.num_button');
const operationButtons = document.querySelectorAll('.op_button');
const equalsButton = document.querySelector('#equals');
const deleteButton = document.querySelector('#delete');
const resetButton = document.querySelector('#reset');

// Screen
const previousOperandTextElement = document.querySelector('#previous_operand');
const currentOperandTextElement = document.querySelector('#current_operand');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.textContent);
        calculator.updateDisplay();
    })
})
