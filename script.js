function add (...x) {
	return Number(result = x.reduce((a,b) => a += b));		
}

function subtract (...x) {
	return Number(result = x.reduce((a,b) => a -= b));
}

function multiply (...x) {
	return Number(result = x.reduce((a,b) => a *= b));
}

function divide(...x) {
    return Number(result = x.reduce((a,b) => a /= b));
}

function power(x,y) {
	return x ** y;
}

function factorial(n) {
	return n !== 0 ? n * factorial(n - 1) : 1;
}

const calcBtns = document.querySelectorAll('.nmb');
const operBtns = document.querySelectorAll('.oper')
const dispCont = document.querySelector('#display');
const histDispCont = document.querySelector('#disp-history');
const inputFromDisp = dispCont.value;
const equalSign = document.querySelector('.operator-equals')

const allOperators = document.querySelectorAll('.oper');
const plus = document.querySelector('.operator-add').value;
const divideSign = document.querySelector('.operator-divide').value;
const multiplySign = document.querySelector('.operator-multiply').value;
const subtractSign = document.querySelector('.operator-subtract').value;
const factorialOper = document.querySelector('.operator-factorial');
const backspace = document.querySelector('.backspace');
let reggie = new RegExp(/^\d*\.?\d*$/);
 
function operate(x, oper, y) {
	console.log(x, oper, y)
	if (oper === '+') {
		return add(x, y);
	} else if (oper === '/' || oper === '÷') {
		return divide(x, y);
	} else if (oper === '*' || oper === 'x') {
		return multiply(x, y);
	} else if (oper === '-') {
		return subtract(x, y);
	} else if (oper === '^' || oper === 'x^') {
		return power(x, y);
	}
}

function isInArray(value, array) {
	for (let i = 0; i <= array; i++) {
		if (isInArray('+', numberValues) || isInArray('-', numberValues) || isInArray('/', numberValues) || isInArray('*', numberValues) || isInArray('**', numberValues)) {
			 array.pop('+');
			 array.pop('-');
			 array.pop('*');
			 array.pop('/');
		}
		}
	return array;
  }

let displayValues;
let numberValues = [];
let operatorValues = [];
let afterOperatorNumbers = [];

calcBtns.forEach(btn => btn.addEventListener('click', (e) => {
	
	displayValues = dispCont.value += e.target.value;
	numberValues = displayValues;
}));
 allOperators.forEach(btn => btn.addEventListener('click', (e) => {
	
	//histDispCont.value = e.target.value;
	histDispCont.value = dispCont.value + e.target.value;
	operatorValues += e.target.value;
	dispCont.value = '';
	
	console.log(e.target.value);

	// console.log(isInArray(dispCont.value, dispCont.value));
 }));

equalSign.addEventListener('click', function() {
	histDispCont.value += dispCont.value;
	dispCont.value = ''; 
	let result = operate(parseInt(histDispCont.value), operatorValues.charAt(operatorValues.length-1), parseInt(numberValues))

	dispCont.value = result;

	console.log(dispCont.value = result)
});

factorialOper.addEventListener('click', () => {
	// dispCont.value += `fact(${dispCont.value})`;
	numberValues = dispCont.value;
	histDispCont.value = `fact(${dispCont.value})`; 
	let result = factorial(numberValues);

	dispCont.value = result;
})

// .split('').filter(function(item, pos, self) {
// 	return self.indexOf(item) == pos;
//   }).join('')

//display-history should listen for clicks on the equals and dispaly the
//result. While the normal dispaly should be displaying the numbers and operators and
//after the equals should become empty.

//need to store the first number that is input into the calculator when a user 
//presses an operator, and also save which operation has been chosen and then operate() on 
//them when the user presses the “=” key.

let pushingNums = function(numbies) {
	numbies.push(numberValues);
}

    const CE = document.querySelector('.clear');
    CE.addEventListener('click', () => {
		displayValues = '';
		dispCont.value = '';
		histDispCont.value = '';
        // while (numberValues.length) {
        //     numberValues.pop();
		// }
		numberValues = [];
		operatorValues = []
	})
	
	backspace.addEventListener('click', () => {
		dispCont.value = dispCont.value.substring(0, dispCont.value.length-1)
	})