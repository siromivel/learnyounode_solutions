module.exports = function (url, callback) {
	http.get(url, function(res) {
		var response = '';
		res.setEncoding('utf8');
		res.on('data', function(data) {
			response += data.toString();
		});
		res.on('end', function() {
			return response;
		});
	});
}
