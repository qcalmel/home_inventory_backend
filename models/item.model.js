module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("item", {
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        acquisitionDate: {
            type: Sequelize.DATE
        }

    });

    return Item;
};