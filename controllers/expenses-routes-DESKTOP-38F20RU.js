// const express = require("express");
// const app = express.app();

// const db = require("../models/index");

// //Need to edit this
// app.get("/", (req, res) => {
//   if (!req.user) {
//     return res.redirect("/");
//   }

//   db.Item.findAll({ where: { UserId: req.user.id } })
//     .then(items => {
//       res.render("list/index", {
//         user: req.user,
//         items: items
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).end();
//     });
// });

// app.post("/list", (req, res) => {
//   if (!req.user) {
//     return res.status(403).end();
//   }

//   db.Item.create({ name: req.body.name, UserId: req.user.id })
//     .then(() => {
//       return db.Item.findAll({ where: { UserId: req.user.id } })
//     })
//     .then(items => {
//       res.render("list/index", {
//         user: req.user,
//         items: items
//       });
//     });
// });

// module.exports = app;