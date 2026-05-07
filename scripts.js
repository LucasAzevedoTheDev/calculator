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

function update(btn) {
  const text = display.textContent;

  // NUMBER PRESSED
  if(btn.classList.contains("number")) {

    if(display.textContent === "0") {
      display.textContent = btn.textContent;
    }
    else {
      display.textContent += btn.textContent;
    }

    // update variables
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
      if(text.includes("%") || text.includes("÷") || text.includes("x") || 
        text.includes("-") || text.includes("+")) {
        // do nothing
      }
      else {
        display.textContent += btn.textContent;
      }      
    }
    else if(btn.classList.contains("divisor")) {
      if(text.includes("%") || text.includes("÷") || text.includes("x") || 
        text.includes("-") || text.includes("+")) {
        // do nothing
      }
      else {
        display.textContent += btn.textContent;
      }
    }
    else if(btn.classList.contains("multiply")) {
      if(text.includes("%") || text.includes("÷") || text.includes("x") || 
        text.includes("-") || text.includes("+")) {
        // do nothing
      }
      else {
        display.textContent += btn.textContent;
      }
    }
    else if(btn.classList.contains("minus")) {
      if(text.includes("%") || text.includes("÷") || text.includes("x") || 
        text.includes("-") || text.includes("+")) {
        // do nothing
      }
      else {
        display.textContent += btn.textContent;
      }
    }
    else if(btn.classList.contains("plus")) {
      if(text.includes("%") || text.includes("÷") || text.includes("x") || 
        text.includes("-") || text.includes("+")) {
        // do nothing
      }
      else {
        display.textContent += btn.textContent;
      }
    }  

    // update variable
    if(operator === undefined) {
      operator = btn.textContent;
    }
  }

  // CLEAR PRESSED
  if(btn.classList.contains("clear")) {

    if(btn.classList.contains("ac")) {
      display.textContent = "0";
    }
    else if(btn.classList.contains("del")) {
      if(text.length > 1) {
        display.textContent = text.slice(0, -1);
      }
      else {
        display.textContent = 0;
      }
    }
  }

  // COMMA
  if(btn.classList.contains("comma")) {
    if(text.includes(",")) {
      // do nothing
    }
    else {
      display.textContent += btn.textContent;
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
commaButton.addEventListener("click", () => update(commaButton));

// make equal button logic
// fix comma bug

