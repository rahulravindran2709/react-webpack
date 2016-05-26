var nodestatic= require('node-static');
var http = require('http');
var fileServer = new nodestatic.Server('./public');
http.createServer(function(req,res){
	console.log('Started')
	req.addListener('end', function () {
        fileServer.serve(req, res);
    }).resume();
}).listen(8080);