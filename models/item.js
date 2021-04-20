'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.Location,{
        foreignKey :"locationId",
        as:"item"

      })
      Item.hasOne(models.Location,{
        foreignKey :"itemId",
        as:"location"
      })
    }
  };

  Item.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    acquisitionDate: DataTypes.DATE,
    locationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};