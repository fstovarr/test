const Location = require("../models/location");

const index = async (req, res, nex) => {
  const { data } = await Location.get();
  res.json(data);
};

module.exports = [
  {
    path: "/",
    method: "get",
    controller: index,
  },
];
