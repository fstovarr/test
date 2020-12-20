const dotenv = require("dotenv");
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

const express = require("express");
const controllers = require("./loaders/controllers.js");
const middlewares = require("./loaders/middlewares.js");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const jwt = require("express-jwt");

const app = express();
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

let publicRoutes = [];

const jwtMiddleware = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS384"],
});

app.use(jwtMiddleware.unless({ path: ["/auth/signin", "/auth/signup"] }));

controllers.forEach(({ base, router, public }) => {
  publicRoutes = publicRoutes.concat(public);
  app.use(`/${base}`, router);
});

middlewares.forEach(({ middleware }) => app.use(middleware));