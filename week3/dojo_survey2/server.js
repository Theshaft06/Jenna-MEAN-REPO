const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.get("/", function (request, response, next) {
    response.render('index');
    return next();
})

app.post("/results", function (request, response) {

    var message = { name: request.body.name, location: request.body.location, language: request.body.language, comment: request.body.comment }

    response.redirect("/", {response: message});

})



var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    // all the server socket code goes in here
    socket.on( "posting_form", function (data){
        // console.log("in posting_form server func");
        socket.emit("updated_message");
    })
})