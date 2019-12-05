const isAuthenticated = require("../config/middleware/authenticated");
const path = require("path");
const db = require("../models");

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

    
    app.get("/MoreCatInfo/:cat", isAuthenticated, function(req, res) {
        console.log(req.user);
                db.Expenses.findAll({
                    where: {category: req.params.cat},
                    attributes: [[db.sequelize.fn('SUM', db.sequelize.col('amount')), 'total']],
                    include: [{
                    model: db.User,
                    where: {id : req.user.id}
                    }]
                }).then(expenses => {
                    /* ... */
                    console.log(JSON.stringify(expenses))
                    res.render("MoreCatInfo", { 
                        title: "CategoryInfo", 
                        css: "./stylesheets/Css/index.css",
                        userId: req.user.id,
                        expenses: expenses
                     })

                })
                .catch(err => {
                    console.log(err);
                    res.status(500).end();
                });
        
    });
}