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
      companies.hasMany(models.job_offers, {
        foreignKey: "company_id",
        targetKey: "company_id",
      });
      companies.hasMany(models.team_members, {
        foreignKey: "company_id",
        targetKey: "company_id",
      });
      companies.belongsTo(models.locations, {
        foreignKey: "location_id",
        sourceKey: "location_id",
      });
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
      description: DataTypes.TEXT,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "companies",
    }
  );
  return companies;
};
