var db = require("../models");
var passport = require("../config/passport");



module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    console.log(req.user);
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to

  app.post("/api/signup", function (req, res) {
    console.log("sign up route successfully hit")
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function (user) {
        console.log(user);
        res.redirect("/Snapshot");

      })
      .catch(function (err) {
        console.log("found me!");
        res.redirect("/Signup")
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};