module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define("location", {
        name: {
            type: Sequelize.STRING
        }
    });

    Location.hasOne(Location,{
        as:"parent",
        onDelete:"cascade"
    });

    return Location;
};