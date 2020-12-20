const fs = require("fs");
const path = require("path");
const express = require("express");
const { body, validationResult } = require("express-validator");

const dir = `${path.resolve()}/controllers/`;
const ext = ".js";

const handleExceptions = (controller) => async (res, req, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return next({ errors: errors.array() });

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
      router[route.method](
        route.path,
        (route.validators && route.validators(body)) || [],
        handleExceptions(route.controller)
      )
    );

    return {
      router,
      base: path.basename(file, ext),
    };
  });
