const express = require("express");
//crbtemp const db = require("../models");

//crbtemp do i need models or modules/index?
//const router = express.Router();
// crbtemp are we using the router??
const db = require("../models/index");

module.exports = function (app) {
    app.get("/expenses", (req, res) => {
        //--- these lines are for redirect
        // app.get("/expenses", (req, res) => {
        //     if (!req.user) {
        //     return res.redirect("/");
        // }
//============================
console.log('you made it here 1');
        db.Expenses.findAll({
            where: {category: 1},
            include: [{
            model: User,
            where: [id = 1]
            }]
        }).then(expenses => {
            /* ... */
            console.log('you made it here 2');
            console.log(JSON.stringify(expenses))
            //---
            // res.render("expenses/index", {
            //     user: req.user,
            //     items: expenses,
            // });
        })
        .catch(err => {
            console.log(err);
            res.status(500).end();
        });

//------------------
        // db.Expense.findAll({ where: { UserId: req.user.id } })
        //     .then(expenses => {
        //         res.render("expenses/index", {
        //             user: req.user,
        //             items: expenses,
        //         });
        //         console.log(expenses);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         res.status(500).end();
        //     });

//''''''''''''''''''''''            
    });

    app.post("/expenses", (req, res) => {
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