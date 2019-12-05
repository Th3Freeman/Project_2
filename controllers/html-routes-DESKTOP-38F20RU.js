
const isAuthenticated = require("../config/middleware/authenticated");
const path = require("path")
module.exports = function (app) {

    app.get("/", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/Snapshot");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/members", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "..views/index.handlebars"));
    });

    app.get("/", function (req, res) {
        res.render("LandingPage", { title: "LandingPage", css: "./stylesheets/Css/LandingPage.css" });
    });

    app.get("/SnapShot", function (req, res) {
        res.render("index", { title: "Snapshot", css: "./stylesheets/Css/index.css" });
    });

    app.get("/UserSetUpBudget", function (req, res) {
        res.render("UserSetUpBudget", { title: "Budget", css: "./stylesheets/Css/UserSetUpBudget.css" });
    });

    app.get("/Signup", function (req, res) {
        res.render("Signup", { title: "Landing", css: "./stylesheets/Css/LandingPage.css" });
    });

    app.get("/MoreCatInfo", function (req, res) {
        res.render("MoreCatInfo", { title: "CategoryInfo", CSS: "./stylesheets/Css/MoreCatInfo.css" })
    })
};
