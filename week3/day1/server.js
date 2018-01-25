const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();

const names = ["Jenna", "Wes", "Todd"];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./server/logger"));

app.use(function (request, response, next) {


    next();
})

app.get("/", function (request, response) {
    response.render("index");
});

app.get("/names/:name_id", function(request, response) {
    response.send(names[request.params.name_id]);
})

app.post("/process", function (request, response) {
    console.log("Hanldling process", request.body);

    names.push(request.body.name);

    response.render("results", { name: request.body.name, names: names })
});

app.listen(port, () => console.log(`Listening on port ${ port }`));