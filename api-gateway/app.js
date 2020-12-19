const dotenv = require("dotenv");
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

const express = require("express");
const controllers = require("./loaders/controllers.js");
const middlewares = require("./loaders/middlewares.js");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var jwt = require("express-jwt");

const app = express();
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

let publicRoutes = [];

controllers.forEach(async (controller) => {
  const { base, router, public } = controller;
  publicRoutes = publicRoutes.concat(public);
  app.use(`/${base}`, router);
});

app.use(
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }).unless({
    path: publicRoutes,
  })
);

middlewares.forEach((mid) => {
  const { middleware } = mid;
  app.use(middleware);
});
