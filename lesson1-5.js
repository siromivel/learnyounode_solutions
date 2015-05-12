var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function (err, list) {
	var l = list.length;
	var filtered = list.filter(function (item) {
		for (var i = 0; i < l; i++) {
			if (path.extname(item) === "." + ext) {
				return item;
			}
		}
	});
	filtered.forEach(function (item) {
		console.log(item);
	});
});
