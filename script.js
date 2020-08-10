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