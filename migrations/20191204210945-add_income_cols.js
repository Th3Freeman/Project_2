'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'monthly_income', {
      type: Sequelize.DECIMAL
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'monthly_income');
  },

};
