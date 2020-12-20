"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EmailsUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EmailsUsers.belongsTo(models.users, {
        foreignKey: "user_id",
        sourceKey: "user_id",
      });
    }
  }
  EmailsUsers.init(
    {
      email_user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      email: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "emails_users",
      indexes: [
        {
          name: "email_index",
          unique: false,
          type: "BTREE",
          fields: ["email"],
        },
        {
          name: "email_active_index",
          unique: true,
          type: "BTREE",
          fields: ["email", "active"],
        },
      ],
    }
  );
  return EmailsUsers;
};
