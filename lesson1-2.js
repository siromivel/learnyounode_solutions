var l = process.argv.length;

function sum(array, startIndex) {
	
	var total = 0;

	for (var i = startIndex; i < l; i++) {
		total = total + parseFloat(array[i]);
	}

	return total;
}

console.log(sum(process.argv, 2));
