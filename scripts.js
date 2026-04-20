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

let display = document.querySelector(".display")

display.textContent = "12345"

// BUTTONS