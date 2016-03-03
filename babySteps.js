'use strict';

let arrayDimension = process.argv.length;
let value = 0;
for(let i=2; i<arrayDimension; i++) {
	value = value + parseInt(process.argv[i]);
}
console.log(value);