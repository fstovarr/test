const fs = require("fs");
const path = require("path");

const dir = `${path.resolve()}/middlewares/`;
const ext = ".js";

module.exports = fs
  .readdirSync(dir)
  .filter((file) => path.extname(file) === ext)
  .map((file) => {
    const middleware = require(`${dir}/${file}`);

    return {
      middleware,
    };
  });
