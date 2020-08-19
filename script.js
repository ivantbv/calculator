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

//a = ~a + 1; - use the bitwises operator to implement a negate function ±

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
const decimalPoint = document.querySelector('.point')
const backspace = document.querySelector('.backspace');
let reggie = new RegExp(/^\d*\.?\d*$/);
 
function operate(x, oper, y) {
	console.log(x, oper, y)
	if (oper === '+') {
		return add(x, y);
	} else if (oper === '/' || oper === '÷') {
		if (y === 0) {
			return 'Can\'t divide by 0'
		} else {
		return divide(x, y);
	}
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

 document.addEventListener('keypress', (e) => {
	if (e.which == 49) {
		dispCont.value += 1;
	} else if (e.which == 50) {
		dispCont.value += 2;
	} else if (e.which == 51) {
		dispCont.value += 3;
	} else if (e.which == 52) {
		dispCont.value += 4;
	} else if (e.which == 53) {
		dispCont.value += 5;
	} else if (e.which == 54) {
		dispCont.value += 6;
	} else if (e.which == 55) {
		dispCont.value += 7;
	} else if (e.which == 56) {
		dispCont.value += 8;
	} else if (e.which == 57) {
		dispCont.value += 9;
	} else if (e.which == 48) {
		dispCont.value += 0;
	}
	numberValues = dispCont.value;
})

equalSign.addEventListener('click', function(e) {
	if (histDispCont.value == '') {
		//stop from clicking if display is empty
		
		//dispCont.value = operate(parseFloat(histDispCont.value), '+', parseFloat(histDispCont))
		e.disabled = true
		histDispCont.value = '';
	} else {
	histDispCont.value += dispCont.value;
	dispCont.value = ''; 
	let result = operate(parseFloat(histDispCont.value), operatorValues.charAt(operatorValues.length-1), parseFloat(numberValues))

	dispCont.value = result;
	console.log(dispCont.value = result)
	e.disabled = false;
}
});

factorialOper.addEventListener('click', () => {
	// dispCont.value += `fact(${dispCont.value})`;
	numberValues = dispCont.value;
	histDispCont.value = `fact(${dispCont.value})`; 
	let result = factorial(numberValues);
	dispCont.value = +(result.toFixed(8));
})

decimalPoint.addEventListener('click', (e) => {
	console.log(e.target)
	if (e.target.length > 1) {
		e.target.disabled = true
	} else if (e.target.length <= 1){
		e.target.disabled = false;
	}
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