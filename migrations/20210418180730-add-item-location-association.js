'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Items',{
      fields:['locationId'],
      type : 'foreign key',
      references:{
        table:'Items',
        field :'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Items', 'Items_locationId_Locations_fk')
    await queryInterface.removeConstraint('Locations', 'Locations_itemId_Items_fk')


  }
};
