const index = (req, res, next) => {
  res.json({ test: "test" });
};

export default [{ path: "/", controller: index, method: "get" }];
