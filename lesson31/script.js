const numberbuttons = document.querySelectorAll(".number");
const operatorbuttons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");

let currentInput = ""
let previousInput = ""
let operator = null

function updateDisplay(v) {
    display.innerText = v
}

numberbuttons.forEach(b => {

    b.addEventListener('click', () => {

        currentInput = currentInput + b.id

        updateDisplay(currentInput)

    })

})
operatorbuttons.forEach(b => {
    b.addEventListener("click", () => {
        const id = b.id
        switch (id) {
            case "clear":
                currentInput = ""
                previousInput = ""
                operator = null
                updateDisplay("0")
                break;
            case "backspace":
                currentInput = currentInput.slice(0, -1)
                updateDisplay(currentInput)
                break

            case 'equals':

                if (operator && previousInput && currentInput) {

                    const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator)

                    updateDisplay(result.toString())

                    currentInput = result.toString()

                    previousInput = ''

                    operator = null

                }

                break

            case 'divide':

            case 'multiply':

            case 'subtract':

            case 'sum':

                if (currentInput) {

                    if (previousInput && operator) {

                        const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator)

                        previousInput = result.toString()

                        updateDisplay(result.toString())

                    }

                    else {

                        previousInput = currentInput

                    }

                    currentInput = ''

                    operator = getOperatorSymbol(id)

                }

                break




        }

    })

})


function getOperatorSymbol(id) {

    switch (id) {

        case 'divide': return '/'

        case 'multiply': return '*'

        case 'subtract': return '-'

        case 'sum': return '+'

        default: return ''

    }

}
function calculate(a, b, op) {

    switch (op) {

        case '+': return a + b

        case '-': return a - b

        case "*": return a * b

        case "/": return a / b

    }

}