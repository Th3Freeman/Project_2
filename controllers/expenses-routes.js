
const db = require("../models");

module.exports = function (app) {
        app.get("/expenses", (req, res) => {
            if (!req.user) {
            return res.redirect("/");
        }

        db.Expense.findAll({
            // temp hard code 3 for expense category
            where: {category: 1},
            include: [{
            model: db.User,
            // temp hard code 1 for userId
            where: {id : 1}
            }]
        }).then(expenses => {
            /* ... */
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

    });

    app.post("/addExpenses", (req, res) => {
        if (!req.user) {
            return res.status(403).end();
        }

        db.Expenses.create({
            category: req.body.category,
            desc: req.body.desc,
            amount: req.body.amount, 
            UserId: req.user.id 
        })
            //.then(() => {
            //    return db.Expenses.findAll({ where: { UserId: req.user.id } })
         //   })
            .then(foundExpenses => {
                res.status(200).send({status: "OK"})
            });
    });

}