//Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express()
    //Setting up port
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static('public'))



//Listening function
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});