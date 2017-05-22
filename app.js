//Require modules for http en file-system
var http = require('http'),
    fs = require('fs');

//create server on a variable
var server = http.createServer(function(request, response){
  //write the heads as response of the server => for an HTML file
  response.writeHead(200, {"Content-Type": "text/html"});
  //create stream readable to take the HTML file
  var html = fs.createReadStream(__dirname + '/index.html');
  //write on the response the HTML file through a pipe
  html.pipe(response);
});

//listen the server
server.listen(3000, '127.0.0.1');
