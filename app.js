const http = require('http');
const fs = require('fs');

var dispatch = {
    '/': function(request, response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname+'/views/index.html').pipe(response);

        return undefined;
    },
    '/contact': function(request, response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname+'/views/contact.html').pipe(response);

        return undefined;
    },
    '/api': function(request, response) {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify({
            date: new Date(),
            user_agent: request.headers['user-agent']
        }));

        return undefined;
    },
    'undefined': function(request, response) {
        response.writeHead(404, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname+'/errors/404.html').pipe(response);

        return undefined;
    }
}

http.createServer((request, response) => {
    return dispatch[request.url](request, response);
}).listen(8080);
