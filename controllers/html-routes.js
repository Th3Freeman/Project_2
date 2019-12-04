
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("LandingPage", { title: "LandingPage", css: "/stylesheets/Css/LandingPage.css" });
    });
    
    app.get("/SnapShot", function(req, res) {
        res.render("index", { title: "Snapshot", css: "/stylesheets/Css/index.css" });
    });
    
    app.get("/UserSetUpBudget", function(req, res) {
        res.render("UserSetUpBudget", { title: "Budget", css: "/stylesheets/Css/index.css" });
    });
};