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
let commaButton = document.querySelector(".comma");
let equalButton = document.querySelector(".equal");

// BUTTON EVENTS
button1.addEventListener("click", () => {
  if(display.textContent === "0") {
    display.textContent = 1;
  }
  else {
    display.textContent += 1;
  }
});

button2.addEventListener("click", () => {
  if(display.textContent === "0") {
    display.textContent = 2;
  }
  else {
    display.textContent += 2;
  }
});

button3.addEventListener("click", () => {
  if(display.textContent === "0") {
    display.textContent = 3;
  }
  else {
    display.textContent += 3;
  }
});

button4.addEventListener("click", () => {
  if(display.textContent === "0") {
    display.textContent = 4;
  }
  else {
    display.textContent += 4;
  }
});

button5.addEventListener("click", () => {
  if(display.textContent === "0") {
    display.textContent = 5;
  }
  else {
    display.textContent += 5;
  }
});

button6.addEventListener("click", () => {
  if(display.textContent === "0") {
    display.textContent = 6;
  }
  else {
    display.textContent += 6;
  }
});

button7.addEventListener("click", () => {
  if(display.textContent === "0") {
    display.textContent = 7;
  }
  else {
    display.textContent += 7;
  }
});

button8.addEventListener("click", () => {
  if(display.textContent === "0") {
    display.textContent = 8;
  }
  else {
    display.textContent += 8;
  }
});

button9.addEventListener("click", () => {
  if(display.textContent === "0") {
    display.textContent = 9;
  }
  else {
    display.textContent += 9;
  }
});

button0.addEventListener("click", () => {
  if(display.textContent === "0") {
    // the display can't be "00"
  }
  else {
    display.textContent += 0;
  }
});

acButton.addEventListener("click", () => {
  display.textContent = "0";
});

delButton.addEventListener("click", () => {
  const text = display.textContent;

  display.textContent = text.slice(0, -1);
})

commaButton.addEventListener("click", () => {
  display.textContent += ",";
})
// fix comma bug


// add operators button event
// add comma button event





// make buttons functional

// add display logic


// create a function

// the function should update one of the number variables
// when the buttons are clicked

// update the display to reflect the value of the variable
