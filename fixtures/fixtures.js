const db = require("../models");

const sequelizeFixtures = require('sequelize-fixtures');

// db.sequelize.sync({force: true}).then(() => {
//     console.log("Drop and re-sync db.");
//     sequelizeFixtures.loadFile(
//         './fixtures/*.json'
//         , db)
//         .then(() => {
//             console.log("Fixtures Loaded");
//             process.exit()
//         });
// });
sequelizeFixtures.loadFile(
    './fixtures/*.json'
    , db)
    .then(() => {
        console.log("Fixtures Loaded");
        process.exit()
    });