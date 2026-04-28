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
  else if (operator === "*") {
    return multiply(a, b);
  }
  else if (operator === "/") {
    return divide(a, b);
  }
  else if (operator === "%") {
    return percent(a, b);
  }
};

let display = document.querySelector(".display");

display.textContent = "12345";

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
let commaButton = document.querySelector(".comma");
let equalButton = document.querySelector(".equal");

button1.addEventListener("click", () => {
  display.textContent += 1;
});

button2.addEventListener("click", () => {
  display.textContent += 2;
});

button3.addEventListener("click", () => {
  display.textContent += 3;
});

button4.addEventListener("click", () => {
  display.textContent += 4;
});

button5.addEventListener("click", () => {
  display.textContent += 5;
});

button6.addEventListener("click", () => {
  display.textContent += 6;
});

button7.addEventListener("click", () => {
  display.textContent += 7;
});

button8.addEventListener("click", () => {
  display.textContent += 8;
});

button9.addEventListener("click", () => {
  display.textContent += 9;
});







// make buttons functional

// add display logic


// create a function

// the function should update one of the number variables
// when the buttons are clicked

// update the display to reflect the value of the variable
