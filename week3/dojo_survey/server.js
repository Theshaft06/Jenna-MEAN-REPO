const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response, next) {
    response.render('index');
    return next();
})

app.post("/results", function (request, response) {

    // request.session.name = request.body.name;
    // request.session.location = request.body.location;
    // request.session.language = request.body.language;
    // request.session.comment = request.body.comment;

    response.render("results", { name: request.body.name, location: request.body.location, language: request.body.language, comment: request.body.comment })

})



app.listen(port, () => console.log(`Listening on port ${ port }`));