//Toys
var http = require('http');
var map  = require('through2-map');

//The right spot
var port = process.argv[2];

//Talk to me
var server = http.createServer(function(req, res) {
	res.writeHead(200);
	req.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);
}).listen(port);
