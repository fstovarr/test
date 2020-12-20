const dotenv = require("dotenv");
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

const express = require("express");
const controllers = require("./loaders/controllers.js");
const middlewares = require("./loaders/middlewares.js");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const models = require("./models/index.js");

const app = express();
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

controllers.forEach(({ base, router }) => {
  app.use(`/${base}`, router);
});

middlewares.forEach(({ middleware }) => {
  app.use(middleware);
});

const worker = require("./workers/worker");

(async () => {
  try {
    await models.sequelize.authenticate();
    console.log("Connection with DB has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
