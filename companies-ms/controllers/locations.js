const { locations } = require("../models/index");

const index = async (req, res, next) => {
  const loc = await locations.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  res.json(loc);
};

module.exports = [{ path: "/", method: "get", controller: index }];
