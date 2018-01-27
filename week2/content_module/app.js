const http = require('http');
const fs   = require('fs');

const static_contents = require("./static.js");

server = http.createServer(function (request, response){
  static_contents(request, response);  //this will serve all static files automatically
});

server.listen(8000);
console.log("Running in localhost at port 8000");



else if (request.url.includes("jpg") === true) {
    fs.readFile('images/request.url.substring(request.url.indexOf("8000/") + 1)', 'utf8', function (errors, contents) {
        response.write(contents);
        response.end();
    }
});