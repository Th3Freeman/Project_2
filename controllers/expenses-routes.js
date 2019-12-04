const express = require("express");
const router = express.Router();

const db = require("../models");

module.exports = function (app) {
    router.get("/expenses", (req, res) => {
        if (!req.user) {
            return res.redirect("/");
        }

        db.Expense.findAll({ where: { UserId: req.user.id } })
            .then(expenses => {
                res.render("expenses/index", {
                    user: req.user,
                    items: expenses,
                });
                console.log(expenses);
            })
            .catch(err => {
                console.log(err);
                res.status(500).end();
            });
    });

    router.post("/expenses", (req, res) => {
        if (!req.user) {
            return res.status(403).end();
        }

        db.Expense.create({ name: req.body.name, UserId: req.user.id })
            .then(() => {
                return db.Expense.findAll({ where: { UserId: req.user.id } })
            })
            .then(foundExpenses => {
                res.render("expenses/index", {
                    user: req.user,
                    items: foundExpenses
                });
            });
    });

}