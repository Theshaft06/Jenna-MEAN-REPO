let express = require("express");
let app = express();

app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");




app.listen(8000, function () {
    console.log("Listening on 8000");
})