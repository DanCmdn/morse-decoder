const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let exprArr = [];
	let n = 0;
	let m = 10;
	for (let i = 0; i < expr.length/10; i++) {
		exprArr.push(expr.slice(n, m));
		n += 10;
		m += 10;
	}
	
	let exprArrDecoded = [];
	for (let item of exprArr) {
		let p = 0;
		let r = 2;
		let decodedItem = '';
		for (let j = 0; j < 5; j++) {
			switch (item.slice(p, r)) {
				case '00':
					decodedItem += '';
					break;
				case '10':
					decodedItem += '.';
					break;
				case '11':
					decodedItem += '-';
					break;
				case '**':
					decodedItem += 'space';
					j += 4;
					break;
				default:
					break;
			}
			p += 2;
			r += 2;
		}
		exprArrDecoded.push(decodedItem);
		decodedItem = '';
		p = 0;
		r = 2;
	}

	let finalArr = [];
	for (let exprArrDecodedItem of exprArrDecoded) {
		if (exprArrDecodedItem === 'space') {
			finalArr.push(' ');
		} else {
			finalArr.push(MORSE_TABLE[exprArrDecodedItem]);
		};
	}
	return finalArr.join('');
}

module.exports = {
	decode
}