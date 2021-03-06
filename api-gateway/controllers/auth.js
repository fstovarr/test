const Auth = require("../services/auth");

const authService = new Auth();

const signin = async (req, res, nex) => {
  const { data } = await authService.signin(
    req.body?.email,
    req.body?.password
  );
  res.json(data);
};

const validate = async (req, res, nex) => {
  const { data } = await authService.validate(req.body.email);
  res.json(data);
};

const signup = async (req, res, nex) => {
  const { data } = await authService.signup(req.body);
  res.json(data);
};

module.exports = [
  {
    path: "/signin",
    validators: (body) => [
      body("email").isEmail().normalizeEmail(),
      body("password").isHash(["sha256"]),
    ],
    controller: signin,
    method: "post",
    public: true,
  },
  {
    path: "/signup",
    validators: (body) => [
      body("email").isEmail().normalizeEmail(),
      body("password").isHash(["sha256"]),
      body("first_name").not().isEmpty(),
    ],
    controller: signup,
    method: "post",
    public: true,
  },
  {
    path: "/validate",
    validators: (body) => [body("email").isEmail().normalizeEmail()],
    public: true,
    controller: validate,
    method: "post",
  },
];
