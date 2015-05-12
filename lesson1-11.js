//Let's get some toys...
var http = require('http');
var fs = require('fs');

//Because who the fuck knows what process.argv[2] even is?
var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (req, res) {
	res.writeHead(200);
	var data = fs.createReadStream(file);

	data.on('open', function() {
		data.pipe(res);
	});

	data.on('error', function() {
		res.end(err);
	});
}).listen(port);
