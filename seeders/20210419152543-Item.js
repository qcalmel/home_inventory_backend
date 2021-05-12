'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Items',[
      {
        id:1,
        name : 'Clavier Logitech Mx Keys',
        price : 10000,
        acquisitionDate: '2020-06-20',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:2,
        name : 'Souris Logitech Mx Master',
        price : 10000,
        acquisitionDate: '2020-06-20',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:3,
        name : 'Bibliothèque',
        price : 3900,
        acquisitionDate: '2020-06-20',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:4,
        name : 'Collection Berserk',
        price : 28000,
        acquisitionDate: '2020-06-20',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:5,
        name : 'Lit',
        price : 10000,
        acquisitionDate: '2020-06-20',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
    await queryInterface.sequelize.query(`ALTER SEQUENCE "Items_id_seq" RESTART WITH 6`)
  },

  down: async (queryInterface, Sequelize) => await queryInterface.bulkDelete('Users',null,{})

};
