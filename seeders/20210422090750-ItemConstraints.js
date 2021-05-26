'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkUpdate("Items", {locationId: 32}, {id: [1,2]})
        await queryInterface.bulkUpdate("Items", {locationId: 34}, {id: 3})
        await queryInterface.bulkUpdate("Items", {locationId: 31}, {id: 4})

        // await Sequelize.models.Item.bulkCreate([
        //     {id:1,locationId:3},
        //     {id:2,locationId:3}
        // ],{updateOnDuplicate:["id"]})

        // await queryInterface.bulkInsert("Items",[
        //     {id:1,locationId:3},
        //     {id:2,locationId:3}
        // ])
        // await queryInterface.sequelize.models.Item.bulkCreate([
        //     {id:1,locationId:3},
        //     {id:2,locationId:3}
        // ],{updateOnDuplicate:["id"]})
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkUpdate("Items", {locationId: null}, {where: {id: {$in: [1, 2]}}})
    }
};
