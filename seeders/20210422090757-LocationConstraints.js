'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate("Locations", {parentId: 1}, {id: 2})
    await queryInterface.bulkUpdate("Locations", {parentId: 2}, {id: [3,4]})
    await queryInterface.bulkUpdate("Locations", {parentId: 4}, {id: [5,6]})
    await queryInterface.bulkUpdate("Locations", {itemId: 3}, {id: 4})
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
