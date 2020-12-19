const index = (req, res, next) => {
  res.json({ test: "test" });
};

module.exports = [{ path: "/", controller: index, method: "get" }];
