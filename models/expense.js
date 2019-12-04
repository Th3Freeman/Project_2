'use strict';
module.exports = (sequelize, DataTypes) => {
  const expense = sequelize.define('expense', {
    travel: DataTypes.DECIMAL,
    food_drink: DataTypes.DECIMAL,
    user_id: DataTypes.INTEGER
  }, {});
  expense.associate = function(models) {
    // associations can be defined here
  };
  return expense;
};