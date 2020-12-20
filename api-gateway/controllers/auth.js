const Auth = require("../services/auth");

const authService = new Auth();

const signin = async (req, res, nex) => {
  const token = await authService.signin(req.body?.email, req.body?.password);
  res.json(token.data);
};

const signout = (req, res, nex) => {
  res.json({});
};

const signup = (req, res, nex) => {};

module.exports = [
  {
    path: "/signin",
    validators: (body) => [
      body("email").isEmail().normalizeEmail(),
      body("password").isHash(["sha256"]),
    ],
    public: true,
    controller: signin,
    method: "post",
  },
  { path: "/signup", public: true, controller: signup, method: "get" },
  { path: "/signout", public: true, controller: signout, method: "post" },
];
