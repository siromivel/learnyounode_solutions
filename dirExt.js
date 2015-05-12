var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		if (err && callback) {
			return callback(err);
		}

		var l = list.length;

		var filtered = list.filter(function (item) {
			for (var i = 0; i < l; i++) {
				if (path.extname(item) === "." + ext) {
					return item;
				}
			}
		});

		if (callback) {
			callback(null, filtered);
		} else {
			return false;
		}
	});
}
