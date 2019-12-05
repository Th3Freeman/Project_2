const isAuthenticated = require("../config/middleware/authenticated");
const path = require("path")
module.exports = function(app) {


    app.get("/", function(req, res) {
        res.render("LandingPage", { title: "LandingPage", css: "./stylesheets/Css/LandingPage.css" });
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/SnapShot", isAuthenticated, function(req, res) {
        res.render("index", { title: "Snapshot", css: "./stylesheets/Css/index.css" });
    });

    app.get("/UserSetUpBudget", function(req, res) {
        res.render("UserSetUpBudget", { title: "Budget", css: "./stylesheets/Css/UserSetUpBudget.css" });
    });

    app.get("/Signup", function(req, res) {
        res.render("Signup", { title: "Landing", css: "./stylesheets/Css/LandingPage.css" });
    });

    app.get("/MoreCatInfo", function(req, res) {
        res.render("MoreCatInfo", { title: "CategoryInfo", css: "./stylesheets/Css/MoreCatInfo.css" })
    });

    app.get("/AboutUs", function(req, res) {
        res.render("AboutUs", { title: "About Us", css: "./stylesheets/Css/AboutUs.css" })
    });

}