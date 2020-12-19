const Auth = require("../services/auth");

const authService = new Auth();

const signin = async (req, res, nex) => {
  const token = await authService.signin(req.username, req.digest);
  res.json(token.data);
};

const signout = (req, res, nex) => {
  res.json({});
};

const signup = (req, res, nex) => {};

module.exports = [
  { path: "/signin", public: true, controller: signin, method: "post" },
  { path: "/signup", public: true, controller: signup, method: "get" },
  { path: "/signout", public: true, controller: signout, method: "post" },
];
