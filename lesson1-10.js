//It depends on...
var net = require('net');

//Do you happen to have the time?
var server = net.createServer(function (socket) {
	var date = new Date();
	var year = date.getUTCFullYear().toString();
	var month = date.getMonth() + 1 >= 10 ? (date.getMonth() + 1).toString:'0' + (date.getMonth() + 1).toString();
	var day = date.getDate() >= 10 ? date.getDate().toString():'0' = date.getDate().toString();
	var hour = date.getHours().toString();
	var minute = date.getMinutes().toString();

	var dateString = year + "-" + month + "-" + day + " " + hour + ":" + minute + "\n";

	socket.write(dateString);
	socket.end();
});
server.listen(process.argv[2]);
