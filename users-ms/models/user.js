"use strict";

const { Model } = require("sequelize");
const sha256 = require("crypto");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // console.log("ASSOCIATE ", models);
      // User.hasMany(models.emails_users);
    }

    calculate_digest(digest) {
      return sha256
        .createHash("sha256")
        .update(digest.toLowerCase() + process.env.SALT)
        .digest("hex");
    }

    validate_digest(digest) {
      const password_digest = this.calculate_digest(digest);
      return this.password_digest === password_digest;
    }
  }
  User.init(
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
  return User;
};
