'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expenses = sequelize.define('Expenses', {
    category: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER
  }, {});
  Expenses.associate = function(models) {
    // associations can be defined here
  };
  return Expenses;
};