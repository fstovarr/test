const { users, emails_users } = require("../models/index.js");
const Auth = require("../services/auth");
const auth = new Auth();

const login = async (req, res, nex) => {
  const token = await auth.authenticate(req.body?.email, req.body?.password);
  res.json({ token });
};

const signup = async (req, res, next) => {
  const email = await emails_users.create(
    {
      email: req.body.email,
      user: {
        ...req.body,
        // https://github.com/sequelize/sequelize/issues/4708
        user_id: (await users.count()) + 1,
        password_digest: req.body.password,
      },
    },
    { include: [users] }
  );

  const token = auth.generateToken(email.user);
  res.json({ token });
};

const validate = async (req, res, next) => {
  const users = await emails_users.findOne({
    where: { email: req.body.email, active: true },
  });
  if (users === null) throw { status: 404, message: "Email don't found" };
  
  res.status(200).json({});
};

module.exports = [
  {
    path: "/login",
    method: "post",
    controller: login,
  },
  {
    path: "/signup",
    method: "post",
    controller: signup,
  },
  { path: "/validate", method: "post", controller: validate },
];
