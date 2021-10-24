import { checkFontSize } from "./helper";
import {commaSeparatedNumber} from './helper'

export default class Calculator {
    constructor(displayHolderElement) {
        this.displayHolderElement = displayHolderElement;
        this.reset();
    }

    reset() {
        this.firstOperand = "";
        this.secondOperand = "";
        this.operation = null;
        this.updateUI();
    }

    delete() {
        if (this.secondOperand) {
            this.secondOperand = this.secondOperand.slice(0, -1)
            return
        }

        if (this.operation) {
            this.operation = null
            return
        }

        if (this.firstOperand) {
            this.firstOperand = this.firstOperand.slice(0, -1)
            return
        }
    }

    addOperand(number) {
        if (!this.operation) {
            this.firstOperand = this.firstOperand + number;
        } else {
            this.secondOperand = this.secondOperand + number;
        }
        //console.log(this.firstOperand, this.secondOperand);
    }

    addOperation(operation) {
        if (this.operation === operation && !this.secondOperand) return;

        if (this.operation && this.secondOperand) {
            this.calculate()
        }

        this.operation = operation;   
        //console.log({operation: this.operation});    
    }

    calculate() {
        switch (this.operation) {
            case "+": 
                let result =
                    parseFloat(this.firstOperand) +
                    parseFloat(this.secondOperand);

                this.firstOperand = result.toString();
                this.operation = null;
                this.secondOperand = "";
                break;
            case "-":
                result =
                    parseFloat(this.firstOperand) -
                    parseFloat(this.secondOperand);

                this.firstOperand = result.toString();
                this.operation = null;
                this.secondOperand = "";
                break;

            case "x":
                result =
                    parseFloat(this.firstOperand) *
                    parseFloat(this.secondOperand);

                this.firstOperand = result.toString();
                this.operation = null;
                this.secondOperand = "";
                break;

            case "/":
                result =
                    parseFloat(this.firstOperand) /
                    parseFloat(this.secondOperand);

                this.firstOperand = result.toString();
                this.operation = null;
                this.secondOperand = "";
                break;

            default:
                return;
        }
    }

    updateUI() {
        if (!this.firstOperand) {
            this.displayHolderElement.innerText = "0";
            checkFontSize(this.displayHolderElement);
            return;
        }

        const formattedFirstOperand = commaSeparatedNumber(this.firstOperand)
        const formattedSecondOperand = commaSeparatedNumber(this.secondOperand)
        const operation = this.operation ? ` ${this.operation} ` : "";

        this.displayHolderElement.innerText =
            formattedFirstOperand + operation + formattedSecondOperand;

        checkFontSize(this.displayHolderElement);
    }
}
