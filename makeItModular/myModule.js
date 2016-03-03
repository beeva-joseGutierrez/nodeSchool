'use strict';

module.exports = function (directoryName, fileNameExtension, callback) {


	let fs = require('fs');
	let path = require('path');

	let fileExtension = '.' + fileNameExtension;
	let filesList = [];


	fs.readdir(directoryName, function(err, list) {
		//el error que recibamos en este callback sera el que devolvamos en nuestro callback
		if (err) {
			return callback(err);
		}

		for (let i = 0; i<list.length; i++) {
			if(path.extname(list[i]) === fileExtension) {
				filesList.push(list[i]);
			}
		}

		//ejecutamos la funcion que nos han pasado con la ficheros filtrada
		callback(null, filesList);
	});


}