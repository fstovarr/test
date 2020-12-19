const fs = require("fs");
const path = require("path");
const express = require("express");

const dir = `${path.resolve()}/controllers/`;
const ext = ".js";

module.exports = fs
  .readdirSync(dir)
  .filter((file) => path.extname(file) === ext)
  .map((file) => {
    const routes = require(`${dir}/${file}`);

    const router = express.Router();

    routes.forEach((route) =>
      router[route.method](route.path, route.controller)
    );

    return {
      router,
      base: path.basename(file, ext),
    };
  });
