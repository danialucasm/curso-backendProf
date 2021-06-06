'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('pruebas', [
        {id: 1, description: 'grabar el curso de back', createdAt: new Date() , updatedAt: new Date()},
        {id: 2, description: 'asdadasdadasd', createdAt: new Date() , updatedAt: new Date()},
        {id: 3, description: 'pruebaaaa', createdAt: new Date() , updatedAt: new Date()}
      ], {});
 
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('pruebas', null, {});

  }
};
