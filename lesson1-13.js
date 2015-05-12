'use strict';

var http = require('http');
var url = require('url');

var port = process.argv[2];

function getUnixTime(date) {
	return date.getTime();
}

function parseTime(date) {
	return {
		"hour": date.getHours(),
		"minute": date.getMinutes(),
		"second": date.getSeconds()
	}
}

var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true);
	var path = parsedUrl.pathname;
	var date = new Date(parsedUrl.query.iso);

	res.writeHead(200, { 'Content-Type': 'application/json' });

	if (path === '/api/parsetime') {
		res.end(JSON.stringify(parseTime(date)));
	} else if (path === '/api/unixtime') {
		res.end(JSON.stringify({"unixtime": getUnixTime(date)}));
	} else {
		res.writeHead(404);
		res.end('Bad path')
	}

}).listen(port, function(err) {
	if (err) {
		throw err;
	} else {
		console.log('Server listening on port: ' + port.toString());
	}
});
