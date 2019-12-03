//Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
<<<<<<< HEAD
const morgan = require("morgan");
const session = require("express-session");

//Setting up port
=======
const path = require("path");
const app = express()
    //Setting up port
>>>>>>> 8a04bfd2105a68a36ee39bd4df70d1fbad9a4e2e
var PORT = process.env.PORT || 8080;

//Set Handlebars as the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

<<<<<<< HEAD
//Middleware

//Static assets


=======
app.use(express.static('public'))
>>>>>>> 8a04bfd2105a68a36ee39bd4df70d1fbad9a4e2e



//Listening function
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});