'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'goal_date', {
      type: Sequelize.DATE 
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'goal_date');
  },

};
