'use strict';

let net = require('net');
let strftime = require('strftime');

let port = process.argv[2];
let date = new Date();

let server = net.createServer(function(socket) {
	console.log('listening');
	
	socket.write(strftime('%F %H:%M')+'\n');
	socket.end();
});

server.listen(port, function() {
	console.log('server bound in port '+port);
});