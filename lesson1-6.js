var dirExt = require('./dirExt.js');
var dir = process.argv[2];
var ext = process.argv[3];

dirExt(dir, ext, function(err, list) {
	if (err) {
		throw err;
	}
	list.forEach(function(item) {
		console.log(item);
	});
});
