module.exports = function() {

    let urlParse =  request.url.substring(request.url.indexOf("8000/") + 1);

    return (
        console.log('Request', request.url);
        if (request.url === '/') {
            fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
                response.end();
            });
        } else if (request.url.includes("jpg") === true) {
            fs.readFile(`./images/${urlParse}`, 'utf8', function (errors, contents) {
                response.write(contents);
                response.end();
            });
        } else if (request.url === '/stylesheet/style.css') {
            fs.readFile('stylesheet/style.css', 'utf8', function (errors, contents) {
                response.write(contents);
                response.end();
            });
        } else {
            response.end('File not found!!!');
        }
    )
}