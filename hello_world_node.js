// Cpt S 489 Demo

var http = require("http");
var handler = function(request, response)
{
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<html><body><h2>Hello (Cpt S 489) World</h2></body></html>");
};
http.createServer(handler).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
