
//calculate function
const calculate = (firstNumber, operator, secondNumber) => {
    let result = "";

    if (operator === "add") {
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
    }
    else if (operator === "subtract") {
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
    }
    else if (operator === "multiply") {
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
    }
    else if (operator === "divide") {
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
    }
    else if (operator === "percentage") {
        result = parseFloat(firstNumber) * parseFloat(secondNumber) / 100;
    }

    return result;
};

const squareroot = (number, operator) => {
    return Math.sqrt(number);
}

const calculator = document.querySelector(".calculator");
const display = document.querySelector("#display");
const keys = document.querySelector(".calc-keys");
//const clear = document.querySelector("#clear");
//const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal-sign");

//if the pressed item is a button
keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            console.log("number keys");
            if (displayedNum === "0" || previousKeyType === "operator") {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        }

        if (action === "decimal") {
            display.textContent = displayedNum + ".";
        }

        if (action === "add" || action === "subtract" || action === "multiply" ||
            action === "divide" || action === "percentage" || action === "squareroot") {
            calculator.dataset.previousKeyType = "operator";
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
           
        }

        if (action === "clear") {
            // display.innerHTML = "";
            display.textContent = "0";
            console.log("clear key")
        }
        if (action === "squareroot") {
            const number = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            display.textContent = squareroot(number, operator);
        }

        if (action === "calculate") {
                const firstValue = calculator.dataset.firstValue;
                const operator = calculator.dataset.operator;
                const secondValue = displayedNum;

                display.textContent = calculate(firstValue, operator, secondValue);
            }

    }
});





