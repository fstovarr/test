const dotenv = require("dotenv");
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("combined"));

const controllers = require("./loaders/controllers.js");
const bodyParser = require("body-parser");
const models = require("./models/index.js");
const middlewares = require("./loaders/middlewares.js");

app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send("INTERNAL SERVER ERROR !");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

controllers.forEach(({ base, router }) => {
  app.use(`/${base}`, router);
});

(async () => {
  try {
    await models.sequelize.authenticate();
    console.log("Connection with DB has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

middlewares.forEach(({ middleware }) => app.use(middleware));
