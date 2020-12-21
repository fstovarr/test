const {
  companies,
  job_offers,
  team_members,
  locations,
  Sequelize,
} = require("../models/index");

const Op = Sequelize.Op;

const index = async (req, res, nex) => {
  const company = await companies.findOne({
    attributes: { exclude: ["updatedAt"] },
    where: {
      user_id: req.params.id,
    },
    include: [
      {
        model: job_offers,
        where: {
          slug: {
            [Op.not]: null,
          },
        },
      },
      { model: team_members },
      { model: locations },
    ],
  });
  res.status(200).json(company);
};

const create = async (req, res, next) => {
  const query = await companies.create(req.body);
  const company = await companies.findOne({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    where: { user_id: query.user_id },
    include: [
      { model: job_offers },
      { model: team_members },
      { model: locations },
    ],
  });
  res.status(200).json(company);
};

const search = async (req, res, next) => {
  const result = await companies.searchInAPI({ name: req.query.name });
  console.log(result);
  res.status(200).json(result);
};

module.exports = [
  { path: "/search", method: "get", controller: search },
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
