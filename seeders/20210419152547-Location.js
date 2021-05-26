'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Items',[
      {
        id:30,
        name : 'Maison',
        isLocation: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:31,
        name : 'Chambre',
        isLocation: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:32,
        name: 'Bureau',
        isLocation: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:33,
        name: 'Bibliothèque',
        isLocation: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:34,
        name: 'Étagère 1',
        isLocation: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:35,
        name: 'Étagère 2',
        isLocation: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
    await queryInterface.sequelize.query(`ALTER SEQUENCE "Items_id_seq" RESTART WITH 36`)
  },

  down: async (queryInterface, Sequelize) => await queryInterface.bulkDelete('Locations',null,{})
};
