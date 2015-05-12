//I'm gonna require some tools for this one.
var fs = require('fs');
var path = require('path');

//How about we make these prettier?
var dir = process.argv[2];
var ext = process.argv[3];

//Lets do it all at once...
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
