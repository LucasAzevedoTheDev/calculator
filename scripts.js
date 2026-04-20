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

let firstNum 
let operator
let secondNum

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
  else if (operator === "*") {
    return multiply(a, b);
  }
  else if (operator === "/") {
    return divide(a, b);
  }
};

let display = document.querySelector(".display");

display.textContent = "12345";

// BUTTONS
let delButton = document.querySelector(".del");
let acButton = document.querySelector(".ac");
let percentButton = document.querySelector(".%");
let divisorButton = document.querySelector(".divisor");
let button7 = document.querySelector(".7");
let button8 = document.querySelector(".8");
let button9 = document.querySelector(".9");
let multiplyButton = document.querySelector(".x");
let button4 = document.querySelector(".4");
let button5 = document.querySelector(".5");
let button6 = document.querySelector(".6");
let minusButton = document.querySelector(".-");
let button1 = document.querySelector(".1");
let button2 = document.querySelector(".2");
let button3 = document.querySelector(".3");
let plusButton = document.querySelector(".+");
let button0 = document.querySelector(".0");
let commaButton = document.querySelector(".,");
let equalButton = document.querySelector(".equal");
