'use strict';

var http = require('http');

var url = process.argv[2];

http.get(url, function(res) {
	var response = '';
	res.on('data', function (data) {
		response = response + data.toString();
	});
	res.on('end', function() {
		console.log(response.length);
		console.log(response);
	});
}).on('error', function(e) {
	console.log('Error: ' + e.message);
});
