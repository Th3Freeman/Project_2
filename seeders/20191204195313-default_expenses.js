'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
        
      }], {});
    */
    return queryInterface.bulkInsert('Expenses', [
      {
        category: 1,
        desc: "plane ticket",
        amount: 433,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Mamma Ricottas",
        amount: 68,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Taco Bell",
        amount: 8,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Panera",
        amount: 18,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Muchas Gracias",
        amount: 13,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Einstein Bagels",
        amount: 7,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 3,
        desc: "Bus",
        amount: 4,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 3,
        desc: "Uber",
        amount: 21,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 3,
        desc: "Train",
        amount: 34,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 4,
        desc: "Services1",
        amount: 100,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 4,
        desc: "Services2",
        amount: 88,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 4,
        desc: "Services3",
        amount: 33,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 1",
        amount: 100,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 2",
        amount: 43,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 3",
        amount: 100,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 4",
        amount: 13,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 5",
        amount: 52,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 1",
        amount: 100,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 2",
        amount: 65,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 3",
        amount: 78,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 4",
        amount: 44,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "plane ticket",
        amount: 433,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Mamma Ricottas",
        amount: 68,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Taco Bell",
        amount: 8,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Panera",
        amount: 18,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Muchas Gracias",
        amount: 13,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Einstein Bagels",
        amount: 7,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 3,
        desc: "Bus",
        amount: 4,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 3,
        desc: "Uber",
        amount: 21,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 3,
        desc: "Train",
        amount: 34,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 4,
        desc: "Services1",
        amount: 100,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 4,
        desc: "Services2",
        amount: 88,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 4,
        desc: "Services3",
        amount: 33,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 1",
        amount: 100,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 2",
        amount: 43,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 3",
        amount: 100,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 4",
        amount: 13,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 5",
        amount: 52,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 1",
        amount: 100,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 2",
        amount: 65,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 3",
        amount: 78,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 4",
        amount: 44,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "plane ticket",
        amount: 433,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Mamma Ricottas",
        amount: 68,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Taco Bell",
        amount: 8,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Panera",
        amount: 18,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Muchas Gracias",
        amount: 13,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Einstein Bagels",
        amount: 7,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 3,
        desc: "Bus",
        amount: 4,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 3,
        desc: "Uber",
        amount: 21,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 3,
        desc: "Train",
        amount: 34,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 4,
        desc: "Services1",
        amount: 100,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 4,
        desc: "Services2",
        amount: 88,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 4,
        desc: "Services3",
        amount: 33,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 1",
        amount: 100,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 2",
        amount: 43,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 3",
        amount: 100,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 4",
        amount: 13,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 5",
        amount: 52,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 1",
        amount: 100,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 2",
        amount: 65,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 3",
        amount: 78,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 4",
        amount: 44,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "plane ticket",
        amount: 433,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Mamma Ricottas",
        amount: 68,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Taco Bell",
        amount: 8,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Panera",
        amount: 18,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Muchas Gracias",
        amount: 13,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 2,
        desc: "Einstein Bagels",
        amount: 7,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 3,
        desc: "Bus",
        amount: 4,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 3,
        desc: "Uber",
        amount: 21,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 3,
        desc: "Train",
        amount: 34,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 4,
        desc: "Services1",
        amount: 100,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 4,
        desc: "Services2",
        amount: 88,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 4,
        desc: "Services3",
        amount: 33,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 1",
        amount: 100,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 2",
        amount: 43,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 3",
        amount: 100,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 4",
        amount: 13,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 5,
        desc: "Misc 5",
        amount: 52,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 1",
        amount: 100,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 2",
        amount: 65,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 3",
        amount: 78,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 6,
        desc: "Health 4",
        amount: 44,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 100,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 65,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 78,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 44,
        userId: 4
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 175,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 65,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 55,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 40,
        userId: 3
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 175,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 65,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 55,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 40,
        userId: 2
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 115,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 35,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 85,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 1,
        desc: "Category 1 Expense",
        amount: 40,
        userId: 1
        , createdAt: new Date(),
        updatedAt: new Date()
      }          
                  
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Expenses', null, {});
  }
};
