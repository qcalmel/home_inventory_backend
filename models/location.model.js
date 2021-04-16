module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define("location", {
        name: {
            type: Sequelize.STRING
        }
    });

    return Location;
};