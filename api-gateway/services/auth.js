const { users } = require("../lib/http.js");

module.exports = class Auth {
  async signin(username, digest) {
    return users.post("/auth/login", { username, digest });
  }
};
