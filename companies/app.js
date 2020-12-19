import express from "express";
import controllers from "./loaders/controllers.js";
import middlewares from "./loaders/middlewares.js";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

controllers.forEach(async (controller) => {
  const { base, router } = await controller;
  app.use(`/${base}`, router);
});

middlewares.forEach(async (mid) => {
  const { middleware } = await mid;
  app.use(middleware);
});
