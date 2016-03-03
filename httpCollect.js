'use strict';

let http = require('http');
let bl = require('bl');
let concatStream = require('concat-stream');

let url = process.argv[2];

http.get(url, function(response) {
	response.pipe(concatStream(function(data) {
		console.log(data.toString().length);
		console.log(data.toString());
	}));
});