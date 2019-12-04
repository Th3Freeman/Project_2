'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
    category: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    amount: DataTypes.DECIMAL
  }, {});
  Expense.associate = function(models) {
    // associations can be defined here
    Expenses.associate = function (models) {
      Expenses.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id'});
    };
  

  };
  return Expense;
};