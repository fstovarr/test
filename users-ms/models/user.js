"use strict";

const { Model } = require("sequelize");
const sha256 = require("crypto");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // console.log("ASSOCIATE ", models);
      Users.hasMany(models.emails_users, {
        foreignKey: "user_id",
        targetKey: "user_id",
      });
    }

    calculateDigest(digest) {
      return sha256
        .createHash("sha256")
        .update(digest.toLowerCase() + process.env.SALT)
        .digest("hex");
    }

    validateDigest(digest) {
      const password_digest = this.calculateDigest(digest);
      return this.password_digest === password_digest;
    }
  }
  Users.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      domain: {
        type: DataTypes.STRING,
        isIn: [["torre", "local"]],
        defaultValue: "torre",
      },
      picture: DataTypes.STRING,
      password_digest: {
        type: DataTypes.STRING,
        is: /^[0-9a-f]{64}$/i,
      },
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "users",
      indexes: [
        {
          name: "password_user_index",
          unique: false,
          type: "BTREE",
          fields: ["password_digest"],
        },
      ],
    }
  );

  Users.beforeCreate(async (user) => {
    user.password_digest = user.calculateDigest(user.password_digest);
  });

  return Users;
};
