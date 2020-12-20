const Company = require("../models/company");

const index = async (req, res, nex) => {
  const response = await Company.get(req.user.user_id);
  res.json(response);
};

const create = async (req, res, next) => {
  const { user_id } = req.user;
  console.log("USER_ID ", user_id, req.body);
  const response = await Company.create({ ...req.body, user_id });
  res.json(response);
};

const search = async (req, res, next) => {
  const { name } = req.query;
  const companies = await Company.search(name);
  res.json(companies);
};

module.exports = [
  {
    path: "/",
    method: "post",
    controller: create,
    validators: (body) => [
      body("location_id").isNumeric({ no_symbols: true }),
      body("company_id").isNumeric({ no_symbols: true }),
      body("description"),
    ],
  },
  { path: "/", method: "get", controller: index },
  { path: "/search", method: "get", controller: search },
];
