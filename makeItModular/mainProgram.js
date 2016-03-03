'use strict';

let myModule = require('./myModule.js');

let filePath = process.argv[2];
let fileExtension = process.argv[3];

myModule(filePath, fileExtension, function(err, data) {
	if(err) {
		console.log('Error: '+err);
	} else {
		for(let i=0; i<data.length; i++) {
			console.log(data[i]);
		}
	}
});