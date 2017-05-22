//Require modules for http en file-system
var http = require('http'),
    fs = require('fs');

//create server on a variable
var server = http.createServer(function(request, response){

  var url = request.url; //variable for routing

  if(url === '/' || url === '/home'){
    //write headers for a HTML page
    response.writeHead(200, {"Content-Type": "text/html"});
    //routing pointing to home page
    fs.createReadStream(__dirname + '/index.html').pipe(response);
  } else if(url === '/contact') {
    //write headers for a HTML page
    response.writeHead(200, {"Content-Type": "text/html"});
    //routing pointing to contact page
    fs.createReadStream(__dirname + '/contact.html').pipe(response);
  } else if( url === '/api'){
      //define object
      var personalData = {
        name: 'Silvestre',
        surname: "Vivo Millan",
        age: 40,
        city: 'Amsterdam'
      };
    //write headers for a JSON object
    response.writeHead(200, {"Content-Type": "application/json"});
    //routing pointing to JSON as string
    response.end(JSON.stringify(personalData));
  } else {
    //write headers for a HTML page
    response.writeHead(200, {"Content-Type": "text/html"});
    //routing pointing to 404 page
    fs.createReadStream(__dirname + '/404.html').pipe(response);
  }
  console.log(request.url);
});

//listen the server
server.listen(3000, '127.0.0.1');
