function add (...x) {
	return result = x.reduce((a,b) => a += b);		
}
function subtract (...x) {
	return result = x.reduce((a,b) => a -= b);
}
function multiply (...x) {
	return result = x.reduce((a,b) => a *= b);
}
function divide(...x) {
    return result = x.reduce((a,b) => a /= b);
}
function power(x,y) {
	return x ** y;
}
function factorial(n) {
	return n !== 0 ? n * factorial(n - 1) : 1;
}
function roundDecimals(n) {
	Math.round(n * 100000) / 100000
}

function negate(n) {
	return n = -n;
}
//√
// function squareRoot(n) {
// 	return Math.sqrt(n);
// }

//a = ~a + 1; - use the bitwises operator to implement a negate function ±

const calcBtns = document.querySelectorAll('.nmb');
const operBtns = document.querySelectorAll('.oper')
const dispCont = document.querySelector('#display');
const histDispCont = document.querySelector('#disp-history');
let paraForHist = document.createElement('p');
const inputFromDisp = dispCont.value;
const equalSign = document.querySelector('.operator-equals')

const allOperators = document.querySelectorAll('.oper');
// const plus = document.querySelector('.operator-add').value;
const factorialOper = document.querySelector('.operator-factorial');
const decimalPoint = document.querySelector('.point')
const backspace = document.querySelector('.backspace');

const plusSign = document.querySelector('.operator-add');
const divideSign = document.querySelector('.operator-divide');
const multiplySign = document.querySelector('.operator-multiply');

const subtractSign = document.querySelector('.operator-subtract');
const powerSign = document.querySelector('.operator-power');
 
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

let shiftPressed = false;
let displayValues;
let numberValues = [];
let operatorValues = [];
let afterOperatorNumbers = [];


calcBtns.forEach(btn => btn.addEventListener('click', (e) => {
	
	displayValues = dispCont.value += e.target.value;

	numberValues = dispCont.value

//	numberValues = displayValues;

}));

function operatorFunc(e) {
	if (numberValues != '' && histDispCont.value != '') {
		//histDispCont.value.substring(histDispCont.value.lastIndexOf(e.target.value) + 1);
		if (histDispCont.value.includes('fact')) {
			histDispCont.value = '';
		}
		equalFunc(e);	
	} 

	if (dispCont.value == null || histDispCont.value == null) {
		e.target.value = ''
		dispCont.value = '';
		histDispCont.value = '';
	}

	if (dispCont.value.indexOf('NaN') > -1 || histDispCont.value.indexOf('NaN') > -1){
		dispCont.value = '';
	}
	// histDispCont.value += dispCont.value
	// dispCont.value = ''

		histDispCont.value = `${dispCont.value}${e.target.value}`;
		console.log(numberValues);
		operatorValues = `${operatorValues}${e.target.value}` 
		dispCont.value = '';
}

 allOperators.forEach(btn => btn.addEventListener('click', (e) => {
	operatorFunc(e)
	equalSign.disabled = false;	
}));

function domNode(nodeType, text) {
    var node = document.createElement(nodeType);
    if (text) node.appendChild(document.createTextNode(text));
    return node;
    }

 document.addEventListener('keydown', (e) => {
	 e.preventDefault();
	if (e.which == 49 || e.which == 97) {
		dispCont.value += 1;
		numberValues = displayValues;
	} else if (e.which == 50 || e.which == 98) {
		dispCont.value += 2;
		numberValues = displayValues;
	} else if (e.which == 51 || e.which == 99) {
		dispCont.value += 3;
	} else if (e.which == 52 || e.which == 100) {
		dispCont.value += 4;
	} else if (e.which == 53 || e.which == 101) {
		dispCont.value += 5;
	} else if (e.which == 54 || e.which == 102) {
		if (shiftPressed == true) {
			return;
		} else {
		dispCont.value += 6;
	}
	} else if (e.which == 55 || e.which == 103) {
		dispCont.value += 7;
	} else if (e.which == 56 || e.which == 104) {
		if (shiftPressed == true) {
			return;
		} else {
		dispCont.value += 8;
	}
	} else if (e.which == 57 || e.which == 105) {
		dispCont.value += 9;
	} else if (e.which == 46) {
		displayValues = '';
		dispCont.value = '';
		histDispCont.value = '';
		numberValues = [];
		operatorValues = []
	} else if (e.which == 8) {
		backSpace();
	} else if (e.which == 78) {
		calcFactorial();
	} 	
	else if (e.which == 48 || e.which == 96) {
		dispCont.value += 0;
	} else if (e.which == 190 || e.which == 110) {
		if (dispCont.value.indexOf('.') > -1){
            return;
        } else {
            return dispCont.value += '.';
        }
	} else if (e.which == 13) {

		if (numberValues != '' && histDispCont.value != '') {

			//histDispCont.value.substring(histDispCont.value.lastIndexOf(e.target.value) + 1);
			if (histDispCont.value.includes('fact')) {
				histDispCont.value = '';
			}
		} 

		let splitted = dispCont.value.split('');
		if (splitted.includes('N', 'A')) {
				 	dispCont.value = '';
				}

				//let arryed = Array.from(histDispCont.value);
				// let splitted = histDispCont.value.split('');
				// if (splitted.includes('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')) {
				// 	histDispCont.value = '';
				// }

				equalFunc(e);

	} else if (e.which == 107) {
		if (numberValues != null && histDispCont.value != null) {
			equalFunc(e);		
		} 
	
		if (dispCont.value == null || histDispCont.value == null) {
			
			dispCont.value = '';
			histDispCont.value = '';
		}

		histDispCont.value = dispCont.value + plusSign.value;
		operatorValues += plusSign.value;
		dispCont.value = '';
		equalSign.disabled = false;
	} else if (e.which == 189 || e.which == 109 || e.which == 173) {
		if (shiftPressed == true) {
			return;
		} else {

		if (numberValues != null && histDispCont.value != null) {
			equalFunc(e);		
		} 
		if (dispCont.value == null || histDispCont.value == null) {
			dispCont.value = '';
			histDispCont.value = '';
		}

		histDispCont.value = dispCont.value + subtractSign.value;
		operatorValues += subtractSign.value;
		dispCont.value = '';
		equalSign.disabled = false;
		}
	} else if (e.which == 111  || e.which == 191) {
		if (numberValues != null && histDispCont.value != null) {
			equalFunc(e);		
		} 
		if (dispCont.value == null || histDispCont.value == null) {
			dispCont.value = '';
			histDispCont.value = '';
		}


		histDispCont.value = dispCont.value + divideSign.value;
		operatorValues += divideSign.value;
		dispCont.value = '';
		equalSign.disabled = false;
	}
	console.log(e.which);
	
	numberValues = dispCont.value;
})
document.addEventListener('keydown', function(e) {
	if (e.which == 16) {shiftPressed = true;} 
	if (e.which == 56 && shiftPressed || e.which == 106) {
		if (numberValues != null && histDispCont.value != null) {
			equalFunc(e);		
		}
		if (dispCont.value == null || histDispCont.value == null) {
			
			dispCont.value = '';
			histDispCont.value = '';
		}
		
		histDispCont.value = dispCont.value + multiplySign.value;
		operatorValues += multiplySign.value;
		dispCont.value = '';
		equalSign.disabled = false;
	} else if (e.which == 54 && shiftPressed) {
		if (numberValues != null && histDispCont.value != null) {

			if (histDispCont.value.includes('fact')) {
				histDispCont.value = '';
			}
			equalFunc(e);		
		} 
	
		if (dispCont.value == null || histDispCont.value == null) {
			
			dispCont.value = '';
			histDispCont.value = '';
		}

		histDispCont.value = dispCont.value + powerSign.value;
		operatorValues += powerSign.value;
		dispCont.value = '';
		equalSign.disabled = false;
	} else if (e.which == 61 || e.which == 187 && shiftPressed) {
		if (numberValues != '' && histDispCont.value != '') {
			equalFunc(e);		
		} 
	
		if (dispCont.value == null || histDispCont.value == null) {
			dispCont.value = '';
			histDispCont.value = '';
		}
	
		histDispCont.value = `${dispCont.value}${plusSign.value}`;
		console.log(numberValues);
		operatorValues = `${operatorValues}${plusSign.value}` 
		dispCont.value = '';
		equalSign.disabled = false;
	}
});

document.addEventListener('keyup', function(e) {
	if(e.which == 16) { shiftPressed = false}	
})

function equalFunc(e) {
		if (dispCont.value.indexOf('NaN') > -1){
			dispCont.value = '';
		} 

	if (!histDispCont.value) {
		//stop from clicking if display is empty
		histDispCont.value = '';
	} 
	else {
	histDispCont.value += dispCont.value;
	dispCont.value = ''; 

	if (numberValues != '' && histDispCont.value != '') {
	let result = operate(parseFloat(histDispCont.value), operatorValues.charAt(operatorValues.length-1), parseFloat(numberValues))
	

	let rounded = Math.round(result * 100000) / 100000;
	dispCont.value = rounded;
		console.log(numberValues);
		histDispCont.value = '';

		let splitted = dispCont.value.split('');
		if (splitted.includes('N', 'A')) {
				 	dispCont.value = '';
				}
	equalSign.disabled = true;
	}
}
}



equalSign.addEventListener('click', equalFunc);

function calcFactorial() {
	if (dispCont.value == '') {
		histDispCont.value = '';
	} else {
	numberValues = dispCont.value;
	histDispCont.value = `fact(${dispCont.value})`; 
	let result = factorial(numberValues);
	//ispCont.value = +(result.toFixed(7));
	dispCont.value = result
	}
}
factorialOper.addEventListener('click', calcFactorial);

decimalPoint.addEventListener('click', (e) => {
	if (dispCont.value.indexOf('.') > -1){
		return;
	} else {
		 dispCont.value += '.';
		 //numberValues = null;
		//histDispCont.value = '';
		 
	}
})

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
	
	function backSpace() {
		dispCont.value = dispCont.value.substring(0, dispCont.value.length-1)
		numberValues = numberValues.substring(0, numberValues.length-1);
	}
	backspace.addEventListener('click', backSpace);