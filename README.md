# 🧮 Calculator

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

A fully functional browser-based calculator built from scratch with Vanilla JavaScript, HTML, and CSS. This is the capstone project of The Odin Project's Foundations curriculum.

## ✨ Features

- **Four arithmetic operations** plus percentage calculation.
- **Decimal support** with duplicate-entry prevention.
- **DEL & AC:** DEL removes the last character; AC resets everything to zero.
- **Display limit:** caps input at 9 characters.
- **Divide by zero handling:** displays "Error" and resets state cleanly.

## 🛠️ Key Learnings

- **State management:** tracking `firstNum`, `operator`, and `secondNum` independently from the display — and keeping them in sync across every interaction.
- **Type coercion:** digits from the DOM are strings; conversion with `Number()` happens at calculation time, not at input time.
- **DOM manipulation & event listeners:** the entire interface is driven by `querySelector`, `textContent`, and `classList` — no libraries.
- **CSS Grid:** keyboard layout built with explicit row and column sizing.

## 🚀 How to run locally

1. Clone this repository:  
   `git clone https://github.com/LucasAzevedoTheDev/calculator.git`
2. Open `index.html` in your browser.

---

Developed by [Lucas Azevedo](https://github.com/LucasAzevedoTheDev)
