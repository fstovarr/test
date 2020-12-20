"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class locations extends Model {
    static associate(models) {
    }
  }
  locations.init(
    {
      location_id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "locations",
    }
  );
  return locations;
};
