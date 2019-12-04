const express = require("express");
const router = express.Router();
var isAuthenticated = require("../config/middleware/authenticated");



router.get("/", function(req, res) {
    res.render("LandingPage", { title: "LandingPage", css: "./stylesheets/Css/LandingPage.css" });
});

router.get("/SnapShot", function(req, res) {
    res.render("index", { title: "Snapshot", css: "./stylesheets/Css/index.css" });
});

router.get("/UserSetUpBudget", function(req, res) {
    res.render("UserSetUpBudget", { title: "Budget", css: "./stylesheets/Css/UserSetUpBudget.css" });
});

router.get("/Signup", function(req, res) {
    res.render("Signup", { title: "Landing", css: "./stylesheets/Css/LandingPage.css" });
});

router.get("/MoreCatInfo", function(req, res) {
<<<<<<< HEAD
    res.render("MoreCatInfo", { title: "CategoryInfo", CSS: "/stylesheets/Css/MoreCatInfo.css"});
});
=======
    res.render("MoreCatInfo", { title: "CategoryInfo", CSS: "./stylesheets/Css/MoreCatInfo.css" })
})
>>>>>>> 48ed00fb85f3fadd4212f3c25719c8d85f827f69


module.exports = router;