// OPERATION FUNCTIONS 
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function percent(a, b) {
  return (a * b) / 100;
}

let firstNum;
let operator;
let secondNum;

function operate(oper, a, b) {
  operator = oper;
  firstNum = a;
  secondNum = b;

  if (operator === "+") {
    return add(a, b);
  }
  else if (operator === "-") {
    return subtract(a, b);
  }
  else if (operator === "x") {
    return multiply(a, b);
  }
  else if (operator === "÷") {
    return divide(a, b);
  }
  else if (operator === "%") {
    return percent(a, b);
  }
};

let display = document.querySelector(".display");

display.textContent = "0";

// BUTTONS
let delButton = document.querySelector(".del");
let acButton = document.querySelector(".ac");
let percentButton = document.querySelector(".percent");
let divisorButton = document.querySelector(".divisor");
let button7 = document.querySelector(".seven");
let button8 = document.querySelector(".eight");
let button9 = document.querySelector(".nine");
let multiplyButton = document.querySelector(".multiply");
let button4 = document.querySelector(".four");
let button5 = document.querySelector(".five");
let button6 = document.querySelector(".six");
let minusButton = document.querySelector(".minus");
let button1 = document.querySelector(".one");
let button2 = document.querySelector(".two");
let button3 = document.querySelector(".three");
let plusButton = document.querySelector(".plus");
let button0 = document.querySelector(".zero");
let pointButton = document.querySelector(".point");
let equalButton = document.querySelector(".equal");

function update(btn) {
  const text = display.textContent;
  const operators = ["-", "+", "x", "%", "÷"];
  const hasOperator = operators.some(item => display.textContent.includes(item));

  // NUMBER PRESSED
  if(btn.classList.contains("number")) {

    if(display.textContent === "0") {
      display.textContent = btn.textContent;
    }
    else {
      display.textContent += btn.textContent;
    }

    // UPDATE firstNum AND secondNum VARIABLES 
    if(operator === undefined && firstNum === undefined) {
      firstNum = btn.textContent;
    }
    else if(operator === undefined && firstNum.length >= 1) {
      firstNum += btn.textContent;
    }
    else if(secondNum === undefined){
      secondNum = btn.textContent;
    }
    else if(secondNum.length >= 1) {
      secondNum += btn.textContent;
    }
  }

  // OPERATOR PRESSED
  if(btn.classList.contains("operator")) {

    if(btn.classList.contains("percent")) {
      if(!hasOperator) {
        display.textContent += btn.textContent;
      }   
    }
    else if(btn.classList.contains("divisor")) {
      if(!hasOperator) {
        display.textContent += btn.textContent;
      }
    }
    else if(btn.classList.contains("multiply")) {
      if(!hasOperator) {
        display.textContent += btn.textContent;
      }
    }
    else if(btn.classList.contains("minus")) {
      if(!hasOperator) {
        display.textContent += btn.textContent;
      }
    }
    else if(btn.classList.contains("plus")) {
      if(!hasOperator) {
        display.textContent += btn.textContent;
      }
    }  

    // update operator variable
    if(operator === undefined) {
      operator = btn.textContent;
    }
  }

  // CLEAR PRESSED
  if(btn.classList.contains("clear")) {

    if(btn.classList.contains("ac")) {
      display.textContent = "0";
      
      operator = undefined;
      firstNum = undefined;
      secondNum = undefined;
    }
    else if(btn.classList.contains("del")) {
      if(text.length > 1) {
        display.textContent = text.slice(0, -1);
      }
      else {
        display.textContent = 0;
      }

      if(hasOperator) {
        const parts = display.textContent.split(/[+\-x%÷]/);

        firstNum = parts[0];
        secondNum = parts[1] || undefined;
      }
      else {
        firstNum = display.textContent;
        operator = undefined;
        secondNum = undefined;
      }
    }
  }

  // POINT
  if(btn.classList.contains("point")) {
    if(!firstNum.includes(".")) {
      display.textContent += btn.textContent;
      firstNum += btn.textContent;
    }
    else if(firstNum.includes(".") && !secondNum.includes(".") && secondNum !== undefined) {
      display.textContent += btn.textContent;
      secondNum += btn.textContent;
    }
  }
  
  // EQUAL
  if(btn.classList.contains("equal")) {
    let result = operate(operator, Number(firstNum), Number(secondNum));
    
    if(!isNaN(result)) {
      display.textContent = result;

      firstNum = result;
      secondNum = undefined;
      operator = undefined;
    }
  }
};

delButton.addEventListener("click", () => update(delButton));
acButton.addEventListener("click", () => update(acButton));
percentButton.addEventListener("click", () => update(percentButton));
divisorButton.addEventListener("click", () => update(divisorButton));
button7.addEventListener("click", () => update(button7));
button8.addEventListener("click", () => update(button8));
button9.addEventListener("click", () => update(button9));
multiplyButton.addEventListener("click", () => update(multiplyButton));
button4.addEventListener("click", () => update(button4));
button5.addEventListener("click", () => update(button5));
button6.addEventListener("click", () => update(button6));
minusButton.addEventListener("click", () => update(minusButton));
button1.addEventListener("click", () => update(button1));
button2.addEventListener("click", () => update(button2));
button3.addEventListener("click", () => update(button3));
plusButton.addEventListener("click", () => update(plusButton));
button0.addEventListener("click", () => update(button0));
pointButton.addEventListener("click", () => update(pointButton));
equalButton.addEventListener("click", () => update(equalButton));

// improve a display limit
// fix comma bug