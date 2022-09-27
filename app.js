
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

//if the pressed item is a button
keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        //the pressed key information from user input
        const keyValue = key.textContent;
        //displayed number in the calculator screen
        const displayedNum = display.textContent;
        const previousNumKey = calculator.dataset.previousNumKey;

        if (!action) {
            if (displayedNum === "0" || previousNumKey === "operator" || previousNumKey === "calculate") {
                display.textContent = keyValue;
            }
            else {
                display.textContent = displayedNum + keyValue;
            }
            calculator.dataset.previousNumKey = "number";
        }

        if (action === "decimal") {
            if (!displayedNum.includes(".")) {
                display.textContent = displayedNum + ".";
            } 
            else if (previousNumKey === "operator" || previousNumKey === "calculate") {
                display.textContent = "0.";
            }
            calculator.dataset.previousNumKey = "decimal";
        }

        if (action === "add" || action === "subtract" || action === "multiply" ||
            action === "divide" || action === "percentage" || action === "squareroot") {

            calculator.dataset.previousNumKey = "operator";
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;

        }
        if (action === "calculate") {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            
            display.textContent = calculate(firstValue, operator, secondValue);
            calculator.dataset.previousNumKey = "calculate";
        }
        if (action === "clear") {
            display.textContent = "0";
            calculator.dataset.previousNumKey = "clear";
        }
        if (action === "squareroot") {
            const number = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            display.textContent = squareroot(number, operator);
        }
    }
});





