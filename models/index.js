const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port:dbConfig.PORT,
    operatorsAliases: 0,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.items = require("./item.model.js")(sequelize, Sequelize);
db.locations = require("./location.model")(sequelize,Sequelize)

db.locations.hasMany(db.items,{as:"items"});
db.items.belongsTo(db.locations,{
    foreignKey:"locationId",
    as : "location"
})

module.exports = db;