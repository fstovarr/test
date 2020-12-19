const validateToken = (req, res, nex) => {};

const login = (req, res, nex) => {
  res.json({ token: "pepepepe" });
  // res.status(403).json({ error: "Forbidden" });
};

const logout = (req, res, nex) => {};

module.exports = [{ path: "/login", method: "post", controller: login }];
