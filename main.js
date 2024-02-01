// Basic calculator math operations

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

// Basic operation variables

let num1;

let num2;

let operator;

// Operate function

const operate = (operator, num1, num2) => operator(num1, num2);

// Display button input

const display = document.querySelector('.display');
const buttonWrapper = document.querySelector('.wrapper');

let displayValue = buttonWrapper.addEventListener('click', (e) => {
	display.textContent += e.target.textContent;
});
