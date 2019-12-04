//Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const session = ("express-session")
const path = require("path");
const db = require("./models/index");

//Requiring our passport configuration
var passport = require("./config/passport");
var passport = require("./models");

//Setting up port
const app = express()
    //Setting up port
var PORT = process.env.PORT || 8080;

//Set Handlebars as the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Uses sessions to keep track of our user's login status
// app.use(session({ secret: "MrSweetMeats", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static('public'));

const HTMLRoutes = require("./controllers/html-routes");

app.use(HTMLRoutes);

app.get("*", (req, res) => res.render("404"));

// Synchronize my schema
db.sequelize.sync({ force: process.env.NODE_ENV !== "production" })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`==> Server listening at http://localhost:${PORT}/`);
        });
    });