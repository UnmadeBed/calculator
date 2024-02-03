// // Basic calculator math operations

// const operations = {
// 	'+': (num1, num2) => {
// 		let result = num1 + num2;
// 		console.log(result);
// 		return result;
// 	},
// 	'-': (num1, num2) => {
// 		let result = num1 - num2;
// 		console.log(result);
// 		return result;
// 	},
// 	x: (num1, num2) => {
// 		let result = num1 * num2;
// 		console.log(result);
// 		return result;
// 	},
// 	'÷': (num1, num2) => {
// 		let result = num1 / num2;
// 		console.log(result);
// 		return result;
// 	},
// };

// let num1;

// let num2;

// let operator;

// // Operate function

// // const operate = (operator, num1, num2) => operator(num1, num2);

// // Display input and perform calculation.

// const display = document.querySelector('.display');
// const buttons = document.querySelectorAll('.input');

// buttons.forEach((button) => {
// 	button.addEventListener('click', (e) => {
// 		if (e.target.classList.contains('number-key')) {
// 			display.textContent += e.target.textContent;
// 			num1 = e.target.textContent;

// 			console.log('Num1: ', num1);
// 		}

// 		if (e.target.textContent === 'AC') {
// 			display.textContent = '';
// 		}
// 		if (e.target.classList.contains('operator')) {
// 			operator = e.target.textContent;
// 			console.log('Operator: ', operator);
// 		}

// 		if (num1 && operator && e.target.classList.contains('number-key')) {
// 			num2 = e.target.textContent;
// 			display.textContent = num2;
// 			console.log('Num2: ', num2);
// 		}

// 		if (e.target.classList.contains('equals')) {
// 			console.log(operator, num1, num2);
// 			display.textContent = operations[operator](+num1, +num2);
// 		}
// 	});
// });

// Basic calculator math operations
const operations = {
	'+': (num1, num2) => {
		let result = num1 + num2;
		console.log(result);
		return result;
	},
	'-': (num1, num2) => {
		let result = num1 - num2;
		console.log(result);
		return result;
	},
	x: (num1, num2) => {
		let result = num1 * num2;
		console.log(result);
		return result;
	},
	'÷': (num1, num2) => {
		let result = num1 / num2;
		console.log(result);
		return result;
	},
};

// Basic operation variables
let num1 = '';
let num2 = '';
let operator;

// Operate function
const operate = (operator, num1, num2) => operations[operator](num1, num2);

// Display input and perform calculation.
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.input');

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		if (e.target.classList.contains('number-key')) {
			display.textContent += e.target.textContent;
			if (operator) {
				num2 += e.target.textContent;
			} else {
				num1 += e.target.textContent;
			}
			console.log('Num1: ', num1, 'Num2: ', num2);
		}

		if (e.target.textContent === 'AC') {
			display.textContent = '';
			num1 = '';
			num2 = '';
			operator = undefined;
		}

		if (e.target.classList.contains('operator')) {
			operator = e.target.textContent;
			console.log('Operator: ', operator);
		}

		if (num1 && operator && e.target.classList.contains('number-key')) {
			display.textContent = e.target.textContent;
		}

		if (e.target.classList.contains('equals')) {
			console.log(operator, num1, num2);
			display.textContent = operate(
				operator,
				parseFloat(num1),
				parseFloat(num2)
			);
			num1 = display.textContent;
			num2 = '';
			operator = undefined;
		}
	});
});
