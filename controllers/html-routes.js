const express = require("express");
const router = express.Router();



router.get("/", function(req, res) {
    res.render("LandingPage", { title: "LandingPage", css: "/stylesheets/Css/LandingPage.css" });
});

router.get("/SnapShot", function(req, res) {
    res.render("index", { title: "Snapshot", css: "/stylesheets/Css/index.css" });
});

router.get("/UserSetUpBudget", function(req, res) {
    res.render("UserSetUpBudget", { title: "Budget", css: "/stylesheets/Css/index.css" });
});


module.exports = router;

