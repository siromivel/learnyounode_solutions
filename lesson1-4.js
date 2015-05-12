var fs = require('fs');

var target = fs.readFile(process.argv[2], function newLines(err, fsData) {
	var targetLength = fsData.toString().split('\n').length - 1;
	console.log(targetLength);
});