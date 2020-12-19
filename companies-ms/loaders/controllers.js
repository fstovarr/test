import fs from "fs";
import path from "path";
import express from "express";

const dir = `${path.resolve()}/controllers/`;
const ext = ".js";

export default fs
  .readdirSync(dir)
  .filter((file) => path.extname(file) === ext)
  .map(async (file) => {
    const routes = (await import(`${dir}/${file}`)).default;

    const router = express.Router();

    routes.forEach((route) =>
      router[route.method](route.path, route.controller)
    );

    return {
      router,
      base: path.basename(file, ext),
    };
  });
