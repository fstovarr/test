"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  companies.init(
    {
      company_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      location_id: DataTypes.INTEGER,
      reputation_avg: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "companies",
    }
  );
  return companies;
};
