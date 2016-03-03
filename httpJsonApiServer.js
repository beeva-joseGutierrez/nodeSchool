'use strict';

const http = require('http');
const url = require('url');
const strftime = require('strftime');

const path = '/api/parsetime';
const path2 = '/api/unixtime';
const port = process.argv[2];

const jsonHeader = { 'Content-Type': 'application/json' };

http.createServer(function(request, response) {

	const iso = url.parse(request.url, true).query.iso;

	switch (url.parse(request.url, true).pathname) {
		case path:
			const localTime = new Date(iso);

			response.writeHead(200, jsonHeader);

			let json1 = {
				'hour': parseInt(strftime('%H', localTime)),
				'minute': parseInt(strftime('%M', localTime)),
				'second': parseInt(strftime('%S', localTime))
			};

			response.write(JSON.stringify(json1));
			response.end();
		break;

		case path2:
			const unixTime = new Date(iso).getTime();

			response.writeHead(200, jsonHeader);
			response.write(JSON.stringify({
				'unixtime': unixTime
			}));
			response.end();
		break;
	}

}).listen(port, function() {
	console.log('Listening in port '+port);
});