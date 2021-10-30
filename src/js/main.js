import "../scss/main.scss";

import { themeToggle, initializeTheme } from "./themeManagement";
import Calculator from "./calculator";
import {
    deleteBtn,
    displayHolderElement,
    equalBtn,
    numberBtns,
    operationBtns,
    resetBtn,
} from "./variables";

// set initial theme
initializeTheme();

// theme changer
themeToggle();

const calculator = new Calculator(displayHolderElement);

numberBtns.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.addOperand(button.innerText);
        calculator.updateUI();
    });
});

operationBtns.forEach((operation) => {
    operation.addEventListener("click", () => {
        calculator.addOperation(operation.innerText);
        calculator.updateUI();
    });
});

resetBtn.addEventListener("click", () => {
    calculator.reset();
    calculator.updateUI();
});

deleteBtn.addEventListener("click", () => {
    calculator.delete();
    calculator.updateUI();
});

equalBtn.addEventListener("click", () => {
    calculator.calculate();
    calculator.updateUI();
});

window.addEventListener("keydown", e => {
    switch (e.key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
            calculator.addOperand(e.key);
            break;

        case "/":
        case "*":
        case "+":
        case "-":
            calculator.addOperation(e.key);
            break;

        case "Backspace":
            calculator.delete();
            break;
        case "Delete":
        case "End":
            calculator.reset();
            break;

        case "Enter":
            calculator.calculate();
            break;

        default:
            return;
    }

    calculator.updateUI();
});
