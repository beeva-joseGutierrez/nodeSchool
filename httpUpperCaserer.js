'use strict';

let http = require('http');
let map = require('through2-map');

let port = process.argv[2];
let location = process.argv[3];

let server = http.createServer(function(request, response) {
	request.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);
});
server.listen(port);