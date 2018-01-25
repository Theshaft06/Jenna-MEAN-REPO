const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require('express-session');
const port = process.env.PORT || 8000;
const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'codingdojorocks'}));

app.get("/", function (request, response, next) {
    let counter = 0;
    console.log(request.session.views);

    if (request.session.views === undefined) {
        request.session.views = 0;
    } else {
        request.session.views += 1;
    }

    response.render('index', { views: request.session.views });
    return next();
})

app.get("/two", function (request, response, next) {
    request.session.views += 1;

    response.redirect("/");
    return next();
})

app.get("/clear", function (request, response, next) {
    request.session.destroy();

    response.redirect("/");
    return next();
})




app.listen(port, () => console.log(`Listening on port ${ port }`));