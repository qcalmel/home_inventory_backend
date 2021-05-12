'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Locations',[
      {
        id:1,
        name : 'Maison',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:2,
        name : 'Chambre',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:3,
        name: 'Bureau',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:4,
        name: 'Bibliothèque',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:5,
        name: 'Étagère 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:6,
        name: 'Étagère 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
    await queryInterface.sequelize.query(`ALTER SEQUENCE "Locations_id_seq" RESTART WITH 7`)
  },

  down: async (queryInterface, Sequelize) => await queryInterface.bulkDelete('Locations',null,{})
};
