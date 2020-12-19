const fs = require("fs");
const path = require("path");
const express = require("express");

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
  .map(async (file) => {
    const routes = (await import(`${dir}/${file}`)).default;

    const router = express.Router();

    routes.forEach((route) =>
      router[route.method](route.path, handleExceptions(route.controller))
    );

    return {
      router,
      base: path.basename(file, ext),
    };
  });
