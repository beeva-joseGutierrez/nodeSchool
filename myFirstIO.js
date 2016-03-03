'use strict';

let fs = require('fs');

if(process.argv.length > 2) {

	let file = fs.readFileSync(process.argv[2]);

	let fileString = file.toString();

	let lines = fileString.split('\n');

	console.log(lines.length-1);

}