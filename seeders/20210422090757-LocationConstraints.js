'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate("Items", {locationId: 30}, {id: 31})
    await queryInterface.bulkUpdate("Items", {locationId: 31}, {id: [32,33]})
    await queryInterface.bulkUpdate("Items", {locationId: 33}, {id: [34,35]})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
