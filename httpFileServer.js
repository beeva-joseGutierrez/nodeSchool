'use strict';

let http = require('http');
let fs = require('fs');

let port = process.argv[2];
let location = process.argv[3];

var server = http.createServer(function(request, response) {
	let stream = fs.createReadStream(location);
	stream.pipe(response);
});

server.listen(port);