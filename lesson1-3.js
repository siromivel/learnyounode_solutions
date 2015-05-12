var fs = require('fs');

var target = fs.readFileSync(process.argv[2]).toString();

var targetLength = target.split("\n").length - 1;

console.log(targetLength);
