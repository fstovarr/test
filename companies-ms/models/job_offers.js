"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class job_offers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async upsert(values, condition) {
      const job_offer = await job_offers.findOne({ where: condition });

      if (job_offer) return job_offers.update(values, { where: condition });

      return job_offers.create(values);
    }
  }

  job_offers.init(
    {
      job_offer_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      company_id: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN,
      opened: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "job_offers",
    }
  );
  return job_offers;
};
