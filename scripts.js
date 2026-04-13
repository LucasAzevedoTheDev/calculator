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
    add(a, b);
  }
  else if (operator === "-") {
    subtract(a, b);
  }
  else if (operator === "*") {
    multiply(a, b);
  }
  else if (operator === "/") {
    divide(a, b);
  }
};

console.log(operate("-", 15, 5))
