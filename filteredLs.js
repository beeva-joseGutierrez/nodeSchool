'use strict';

if (process.argv.length > 2) {

	let fs = require('fs');
	let path = require('path');

	let filePath = process.argv[2];
	let fileExtension = process.argv[3];

	fileExtension = '.' + fileExtension;


	fs.readdir(filePath, function(err, list) {
		for (let i = 0; i<list.length; i++) {
			if(path.extname(list[i]) === fileExtension) {
				console.log(list[i]);
			}
		}
	});

}