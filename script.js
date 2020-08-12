function add (...x) {
		const result = x.reduce((a,b) => a += b);
		return Number(result);		
}

function subtract (...x) {
	const result = x.reduce((a,b) => a -= b);
	return Number(result);
}

function multiply (...x) {
	const result = x.reduce((a,b) => a *= b);
	return Number(result);
}

function divide(...x) {
    const result = x.reduce((a,b) => a /= b);
    return Number(result);
}

function power(x,y) {
	return x ** y;
}

function factorial(n) {
	if (n !=0) {
		return n * factorial(n -1);
	} else {
		return 1
	}
}

// function sum (a) {
// 	let result = a.reduce((a, b) => a + b,0)
// 	let stringed = result.toString();
// 	let parsed = parseInt(stringed);
// 	return parsed;
// }

const calcBtns = document.querySelectorAll('.nmb');
const operBtns = document.querySelectorAll('.oper')
const dispCont = document.querySelector('#display');
const inputFromDisp = document.querySelector('#display').value;

const equalSign = document.querySelector('.operator-equals');
//const dispHistCont = document.querySelector('#disp-history');

let displayValues;
let numberValues = [];

function operate(x, oper, y) {
	if (oper === '+') {
		return add(x, y);
	} else if (oper === '/') {
		return divide(x, y);
	} else if (oper === '*' || oper === 'x') {
		return multiply(x, y);
	} else if (oper = '-') {
		return subtract(x, y);
	} else if (oper = '**') {
		return power(x, y);
	}
}

calcBtns.forEach(btn => btn.addEventListener('click', (e) => {
	
	displayValues = dispCont.value += e.target.value;
	//console.log(displayValues);
	if (operBtns == true) {
		displayValues = ''
	}
}));

//You’ll need to store the first number that is input into the calculator when a user 
//presses an operator, and also save which operation has been chosen and then operate() on 
//them when the user presses the “=” key.

function storingOper() {
	operBtns.forEach(btn => btn.addEventListener('click', (e) => {
		let operator = e.target.value;
		console.log(operator);
		//dispCont.value += e.target.value;
		dispCont.value
		//dispHistCont.value += e.target.value;
		
		//displayValues = '';
		
		//console.log(operator); logs the operator clicked
		console.log(dispCont.value); //logs the current input on the display

		//numberValues = dispCont.value;
		//console.log(numberValues);
		
		function storingNums(numbies) {
			numbies.push(dispCont.value);
			return numbies;
		}
		//pushingNums();
		storingNums(numberValues);

	}))
}
storingOper();

		equalSign.addEventListener('click', (e) => {

			calcBtns.forEach(opera => {
				//dispHistCont.value = dispCont.value;
				//dispCont.value = '';
			  });
		})
		let CE = document.querySelector('.clear');
		CE.addEventListener('click', () => {
			dispCont.value = '';
			while (numberValues.length) {
				numberValues.pop();
			}
			//dispHistCont.value = '';
		})

// let numClickAgain = function() {
// 	calcBtns.forEach(btn => btn.addEventListener('click', () => {
// 		if (operBtns.clicked == true) {
// 		dispCont.value = '';
// 	}
// 	}))
// }
// numClickAgain();