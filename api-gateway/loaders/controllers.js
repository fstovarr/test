const fs = require("fs");
const path = require("path");
const express = require("express");
const { check, validationResult } = require("express-validator");

const dir = `${path.resolve()}/controllers/`;
const ext = ".js";

const handleExceptions = (controller) => async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return next({ errors: errors.array() });
    await controller(req, res, next);
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
    const base = path.basename(file, ext);
    const public = [];

    routes.forEach((route) => {
      if (route.public)
        public.push(`/${base}/${route.path}`.replace("//", "/"));

      router[route.method](
        route.path,
        (route.validators && route.validators(check)) || [],
        handleExceptions(route.controller)
      );
    });

    return {
      router,
      base,
      public,
    };
  });
