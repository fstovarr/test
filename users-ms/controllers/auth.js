const models = require("../models/index.js");
const Auth = require("../services/auth");
const auth = new Auth();

const validateToken = (req, res, nex) => {};

const login = async (req, res, nex) => {
  const token = await auth.authenticate(req.body?.email, req.body?.password);
  res.json({ token });
};

const logout = (req, res, nex) => {};

module.exports = [
  {
    path: "/login",
    validators: (body) => [
      body("email").isEmail(),
      body("password").isLength({ min: 10 }),
    ],
    method: "post",
    controller: login,
  },
];
