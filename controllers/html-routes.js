const express = require("express");
const router = express.Router();
var isAuthenticated = require("../config/middleware/authenticated");


router.get("/", function(req, res) {
    res.render("LandingPage", { title: "LandingPage", css: "/stylesheets/Css/LandingPage.css" });
});

router.get("/SnapShot", function(req, res) {
    res.render("index", { title: "Snapshot", css: "/stylesheets/Css/index.css" });
});

router.get("/UserSetUpBudget", function(req, res) {
    res.render("UserSetUpBudget", { title: "Budget", css: "/stylesheets/Css/UserSetUpBudget.css"});
});

router.get("/MoreCatInfo", function(req, res) {
    res.render("MoreCatInfo", { title: "CategoryInfo", CSS: "/stylesheets/Css/MoreCatInfo.css"})
})


module.exports = router;

