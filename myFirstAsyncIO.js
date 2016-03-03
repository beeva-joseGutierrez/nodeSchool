'use strict';

let fs = require('fs');

// let file = fs.readFile(process.argv[2]);

fs.readFile(process.argv[2], function(err, file) {
	let fileString = file.toString();
	let linesArray = fileString.split('\n');
	let numOfLines = linesArray.length -1;

	console.log(numOfLines);
});