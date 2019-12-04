'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
    category: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER
  }, {});
  Expense.associate = function(models) {
    // associations can be defined here
  };
  return Expense;
};