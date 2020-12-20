const { companies } = require("../lib/http");

module.exports = class Location {
  static async get() {
    return companies.get("/locations/");
  }
};
