//parseFloat will parse the string to float or decimal if there is a float number
const firstNumber = parseFloat(prompt("First number: "));
const operator = prompt("Operator: ");
const secondNumber = parseFloat(prompt("Second number: "));

alert ("Result is: " +CALCULATE(firstNumber, operator, secondNumber));

//alert(`${firstNumber} ${operator} ${secondNumber}`);

// CALCULATE FUNCTION
    // - can ADD, SUBTRACT, DIVIDE or MULTIPLY
    // - can PERCENTAGE
    // - can SQUARE ROOT
    // - can handle three or more numbers

function CALCULATE(firstNumber, operator, secondNumber){
    
    switch(operator){
        case '+':
            return firstNumber + secondNumber;
            break;
        case '-':
            return firstNumber - secondNumber;
            break;
        case '*':
            return firstNumber * secondNumber;
            break;
        case '/':
            return firstNumber / secondNumber;
            break;
        case '%':
            return (firstNumber*secondNumber)/100;
            break;
        
        
            
    }
}



 