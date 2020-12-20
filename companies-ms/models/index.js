"use strict";

const config = require("../config/config.js");
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const { type } = require("os");

const ext = ".js";
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

function isFunction(funcOrClass) {
  const propertyNames = Object.getOwnPropertyNames(funcOrClass);
  return (
    !propertyNames.includes("prototype") || propertyNames.includes("arguments")
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      !__filename.endsWith(file) &&
      path.extname(file) === ext
    );
  })
  .forEach((file) => {
    let model = require(path.join(__dirname, file));

    if (isFunction(model)) {
      model = model(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    }
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
