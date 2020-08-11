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

//function operate that takes an operator and 2 
//numbers and then calls one of the above functions on the numbers.


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

//Create the functions that populate the display when you click the number buttons… you 
//should be storing the ‘display value’ in a variable somewhere for use in the next step.

const calcBtns = document.querySelectorAll('.nmb');
let dispCont = document.querySelector('#display')
let displayValues;
calcBtns.forEach(btn => btn.addEventListener('click', (e) => {
	
	displayValues = dispCont.value += e.target.value;
	console.log(displayValues);
}));


