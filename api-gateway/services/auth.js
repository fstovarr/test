const { users } = require("../lib/http.js");

module.exports = class Auth {
  async signin(email, password) {
    return users.post("/auth/login", { email, password });
  }
  async signup(data) {
    return users.post("/auth/signup", data);
  }
};
