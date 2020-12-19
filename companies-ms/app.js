import express from "express";
import controllers from "./loaders/controllers.js";
import middlewares from "./loaders/middlewares.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

const app = express();
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

controllers.forEach(async (controller) => {
  const { base, router } = await controller;
  app.use(`/${base}`, router);
});

middlewares.forEach(async (mid) => {
  const { middleware } = await mid;
  app.use(middleware);
});
