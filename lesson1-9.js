'use strict';

//http helps to http!
var http = require('http');

var results = [];

//Run the thing as many times as the magic needs to happen.
for (var i = 0; i + 2 < process.argv.length; i++) {
	getUrl(process.argv[i + 2], i);
}
console.log(results);

//The "magic".
function getUrl(url, index, callback) {
	http.get(url, function(res) {
		var response = '';
		res.setEncoding('utf8');
		res.on('data', function(data) {
			response += data;
		});
		res.on('end', function() {
			results[index] = response;
			var resultsCount = 0;

			for (var j = 0; j < results.length; j++) 
		});
	});
}
