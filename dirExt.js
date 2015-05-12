var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		//Bail on error!
		if (err && callback) {
			return callback(err);
		}

		var l = list.length;

		//Create our filtered list
		var filtered = list.filter(function (item) {
			for (var i = 0; i < l; i++) {
				if (path.extname(item) === "." + ext) {
					return item;
				}
			}
		});
		//Run someone else's junk...
		if (callback) {
			callback(null, filtered);
		} else {
			return false;
		}
	});
}
