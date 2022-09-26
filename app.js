const keys = document.querySelector(".calc-keys")
const calculator = document.querySelector(".calculator");


//all the action keys in click event
keys.addEventListener("click", (event) =>{

    if(event.target.matches("button")){
        const key = event.target;
        const action = key.dataset.action;
       if (!action) {
            console.log("number")
          }

          if (
                action === 'add' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide' ||
                action === 'percentage' ||
                action === 'squareroot'
              ) {
                console.log("operator")
              }

              if (action === 'decimal') {
                console.log("decimal")
              }
              
              if (action === 'clear') {
                console.log("clear")
              }
              
              if (action === 'calculate') {
                console.log("equal")
              }
    }
});

const display = document.querySelector(".calc-display")

keys.addEventListener("click", (event) =>{

    if(event.target.matches("button")){
        const key = event.target;
        const action = key.dataset.action;
        const keyContent = key.dataset.action;
        const displayedNum = display.textContent;

          if (!action) {
            if (displayedNum === "0") {
              display.textContent = keyContent
            } else {
              display.textContent = displayedNum + keyContent
            }
          }
    }
});





 