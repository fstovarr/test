"use strict";
const { Model } = require("sequelize");
const http = require("../lib/http");

module.exports = (sequelize, DataTypes) => {
  class team_members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    async getDetails() {
      const { data } = await http.bio.get(`/bios/${this.username}`);
      return data;
    }

    static async upsert(values, condition) {
      const team_member = await team_members.findOne({ where: condition });

      if (team_member) return team_members.update(values, { where: condition });

      return team_members.create(values);
    }
  }
  team_members.init(
    {
      team_member_id: { type: DataTypes.STRING, primaryKey: true },
      username: DataTypes.STRING,
      company_id: DataTypes.INTEGER,
      weight: DataTypes.DOUBLE,
      picture: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "team_members",
    }
  );
  return team_members;
};
