const {
  companies,
  job_offers,
  team_members,
  locations,
} = require("../models/index");

const index = async (req, res, nex) => {
  const company = await companies.findOne({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    where: { user_id: req.params.id },
    include: [
      { model: job_offers },
      { model: team_members },
      { model: locations },
    ],
  });
  res.status(200).json(company);
};

const create = async (req, res, next) => {
  console.log(req.body);
  await companies.create(req.body);
  res.status(200).json({});
};

module.exports = [
  {
    path: "/",
    method: "post",
    controller: create,
  },
  {
    path: "/:id",
    method: "get",
    controller: index,
  },
];
