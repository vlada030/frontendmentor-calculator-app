import "../scss/main.scss"

import {themeToggle, initializeTheme} from './themeManagement'
import Calculator from "./calculator"
import {decPointBtn, deleteBtn, displayHolderElement, equalBtn, numberBtns, operationBtns, resetBtn} from './variables'

// set initial theme
initializeTheme()

// theme changer
themeToggle()

const calculator = new Calculator(displayHolderElement);

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addOperand(button.innerText)
        calculator.updateUI()
    })
})

operationBtns.forEach(operation => {
    operation.addEventListener('click', ()=> {
        calculator.addOperation(operation.innerText)
        calculator.updateUI()
    })    
})

resetBtn.addEventListener('click', () => {
    calculator.reset()
    calculator.updateUI()
})

deleteBtn.addEventListener('click', () => {
    calculator.delete()
    calculator.updateUI()
})

equalBtn.addEventListener('click', () => {
    calculator.calculate()
    calculator.updateUI()
})








