const schedule = require("node-schedule");

const {
  sequelize,
  companies,
  job_offers,
  team_members,
} = require("../models/index");

const JobOffersService = require("./job_offers");

const indexJobOffers = async () => {
  console.log("##### START INDEX JOB OFFERS ####");
  const BATCH_SIZE = 20;
  let companiesLs = [null];
  let counterCompanies = 0;

  await job_offers.update(
    { active: false, opened: false },
    {
      where: {
        active: true,
      },
    }
  );

  while (
    companiesLs !== null &&
    Array.isArray(companiesLs) &&
    companiesLs.length > 0
  ) {
    companiesLs = await companies.findAll({
      offset: counterCompanies * BATCH_SIZE,
      limit: BATCH_SIZE,
    });

    counterCompanies++;
    let company;
    for (company of companiesLs) {
      await JobOffersService.updateJobOffers(company, BATCH_SIZE);
    }
  }
  console.log("---- END INDEX JOB OFFERS ----");
};

const updateReputation = async () => {
  console.log("##### START UPDATE REPUTATION ####");
  const avgs = await team_members.findAll({
    attributes: [
      "company_id",
      [sequelize.fn("AVG", sequelize.col("weight")), "reputation_avg"],
    ],
    group: ["company_id"],
  });
  for (let avg of avgs) {
    const { reputation_avg, company_id } = avg.dataValues;
    companies.update({ reputation_avg }, { where: { company_id } });
  }

  console.log("---- END UPDATE REPUTATION ----");
};

(async () => {
  console.log("WORKER INITIALIZED");
  schedule.scheduleJob("*/5 * * * *", async () => await indexJobOffers());
  schedule.scheduleJob("*/6 * * * *", async () => await updateReputation());
})();
