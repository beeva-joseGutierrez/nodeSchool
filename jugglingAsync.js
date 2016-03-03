'use strict';

let http = require('http');
let bl = require('bl');
let concatStream = require('concat-stream');

// Num of urls can be received
const numUrls = process.argv.length - 2;

// Set list of urls
let url = [];
for (let i=2; i<process.argv.length; i++) {
	url[i-2] = process.argv[i];
}

// Call function to call all callbacks
call(0);

function call(index) {
	http.get(url[index], function(response) {
		response.pipe(concatStream(function(data) {
			console.log(data.toString());
			if (index<numUrls) {
				call(++index);
			}
		}));
	});
}