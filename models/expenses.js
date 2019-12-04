'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expenses = sequelize.define('Expenses', {
    category: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    amount: DataTypes.DECIMAL
  }, {});
  
    // associations can be defined here
    Expenses.associate = function (models) {
      Expenses.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id'});
    };
  

  
  return Expenses;
};