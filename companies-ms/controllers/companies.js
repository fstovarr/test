const {
  companies,
  job_offers,
  team_members,
  locations,
  Sequelize,
} = require("../models/index");
const JobOffersService = require("../services/job_offers");

const Op = Sequelize.Op;

const index = async (req, res, nex) => {
  console.log("USER_ID ", req.params.id);
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
        required: false,
      },
      { model: team_members, required: false },
      { model: locations, required: false },
    ],
  });
  res.status(200).json(company);
};

const create = async (req, res, next) => {
  const query = await companies.create(req.body);

  JobOffersService.updateJobOffers(query);

  const company = await companies.findOne({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    where: { user_id: query.user_id },
    include: [
      { model: job_offers, required: false },
      { model: team_members, required: false },
      { model: locations, required: false },
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
