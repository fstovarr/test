const fs = require("fs");
const path = require("path");
const express = require("express");
const models = require("../models/index.js");

const dir = `${path.resolve()}/controllers/`;
const ext = ".js";

const handleExceptions = (controller) => async (res, req, next) => {
  try {
    await controller(res, req, next);
  } catch (error) {
    return next(error);
  }
};

module.exports = fs
  .readdirSync(dir)
  .filter((file) => path.extname(file) === ext)
  .map((file) => {
    const routes = require(`${dir}/${file}`);

    const router = express.Router();
    routes.forEach((route) =>
      router[route.method](route.path, handleExceptions(route.controller))
    );

    return {
      router,
      base: path.basename(file, ext),
    };
  });
