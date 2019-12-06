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
//---

        const db = require("../models");
        console.log('chris here');
        db.Expenses.findAll({
//            where: {category: 1},
            group: ['category'],
            attributes: ['category', [db.sequelize.fn('SUM', db.sequelize.col('amount')), 'total']],
            include: [{
            model: db.User,
            where: {id : req.user.id}
            }]
        }).then(expenses => {
     //       console.log(JSON.stringify(expenses))   
          //  console.log(expenses);
        })
        .catch(err => {
            console.log(err);
            res.status(500).end();
        });
//------------------------------        
        res.render("index", { 
            title: "Snapshot", 
            css: "./stylesheets/Css/index.css", 
            JS: "./public/JS/indexpage.js",
            expenses: db.expenses
        });
    });

    app.get("/UserSetUpBudget", isAuthenticated, function(req, res) {
        res.render("UserSetUpBudget", { title: "Budget", css: "./stylesheets/Css/UserSetUpBudget.css" });
    });

    app.get("/Signup", function(req, res) {
        res.render("Signup", { title: "Landing", css: "./stylesheets/Css/LandingPage.css" });
    });

    app.get("/MoreCatInfo1", function(req, res) {
        res.render("MoreCatInfo1", { title: "TravelInfo", css: "./stylesheets/Css/MoreCatInfo.css" })
    });

    app.get("/MoreCatInfo2", function(req, res) {
        res.render("MoreCatInfo2", { title: "Food&DrinkInfo", css: "./stylesheets/Css/MoreCatInfo.css" })
    });

    app.get("/MoreCatInfo3", function(req, res) {
        res.render("MoreCatInfo3", { title: "TransportationInfo", css: "./stylesheets/Css/MoreCatInfo.css" })
    });

    app.get("/MoreCatInfo4", function(req, res) {
        res.render("MoreCatInfo4", { title: "ServicesInfo", css: "./stylesheets/Css/MoreCatInfo.css" })
    });

    app.get("/MoreCatInfo5", function(req, res) {
        res.render("MoreCatInfo5", { title: "MiscInfo", css: "./stylesheets/Css/MoreCatInfo.css" })
    });

    app.get("/MoreCatInfo6", function(req, res) {
        res.render("MoreCatInfo6", { title: "HealthInfo", css: "./stylesheets/Css/MoreCatInfo.css" })
    });

    app.get("/AboutUs", function(req, res) {
        res.render("AboutUs", { title: "About Us", css: "./stylesheets/Css/AboutUs.css" })
    });

    //Category routes
    app.get("/MoreCatInfo1", function(req, res) {
        res.render("MoreCatInfo1", { title: "TravelInfo", css: "./stylesheets/Css/MoreCatInfo.css" })
    });
    app.get("/MoreCatInfo2", function(req, res) {
        res.render("MoreCatInfo2", { title: "Food&DrinkInfo", css: "./stylesheets/Css/MoreCatInfo.css" })
    });
    app.get("/MoreCatInfo3", function(req, res) {
        res.render("MoreCatInfo3", { title: "TransportationInfo", css: "./stylesheets/Css/MoreCatInfo.css" })
    });
    app.get("/MoreCatInfo4", function(req, res) {
        res.render("MoreCatInfo4", { title: "ServicesInfo", css: "./stylesheets/Css/MoreCatInfo.css" })
    });
    app.get("/MoreCatInfo5", function(req, res) {
        res.render("MoreCatInfo5", { title: "MiscInfo", css: "./stylesheets/Css/MoreCatInfo.css" })
    });
    app.get("/MoreCatInfo6", function(req, res) {
        res.render("MoreCatInfo6", { title: "HealthInfo", css: "./stylesheets/Css/MoreCatInfo.css" })
    });



    // app.get("/MoreCatInfo/:cat", isAuthenticated, function(req, res) {
    //     console.log(req.user);
    //     db.Expenses.findAll({
    //             // temp hard code 3 for expense category
    //             where: { category: req.params.cat },
    //             include: [{
    //                 model: db.User,
    //                 // temp hard code 1 for userId
    //                 where: { id: req.user.id }
    //             }]
    //         }).then(expenses => {
    //             /* ... */
    //             console.log(JSON.stringify(expenses))
    //             res.render("MoreCatInfo", {
    //                 title: "CategoryInfo",
    //                 css: "./stylesheets/Css/MoreCatInfo.css",
    //                 userId: req.user.id,
    //                 expenses: expenses
    //             })

    //         })
    //         .catch(err => {
    //             console.log(err);
    //             res.status(500).end();
    //         });

    // });
}