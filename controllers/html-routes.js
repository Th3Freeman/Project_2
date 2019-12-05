const isAuthenticated = require("../config/middleware/authenticated");
const path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("LandingPage", { title: "LandingPage", css: "./stylesheets/Css/LandingPage.css" });
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/SnapShot", isAuthenticated, function(req, res) {
        res.render("index", { title: "Snapshot", css: "./stylesheets/Css/index.css" });
    });

    app.get("/UserSetUpBudget", isAuthenticated, function(req, res) {
        res.render("UserSetUpBudget", { title: "Budget", css: "./stylesheets/Css/UserSetUpBudget.css" });
    });

    app.get("/Signup", function(req, res) {
        res.render("Signup", { title: "Landing", css: "./stylesheets/Css/LandingPage.css" });
    });

    app.get("/MoreCatInfo", isAuthenticated, function(req, res) {
        res.render("MoreCatInfo", { title: "CategoryInfo", CSS: "./stylesheets/Css/MoreCatInfo.css" })
    })
};