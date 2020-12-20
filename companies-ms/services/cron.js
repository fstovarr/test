const schedule = require("node-schedule");
const Opportunities = require("../models/opportunities");
const { Op } = require("sequelize");

const {
  companies,
  job_offers,
  team_members,
  sequelize,
} = require("../models/index");

const updateJobOffers = async (company, BATCH_SIZE = 50) => {
  let counterOpportunities = 0,
    opportunities = [null];

  let opportunity = [];

  while (
    opportunities !== null &&
    Array.isArray(opportunities) &&
    opportunities.length > 0
  ) {
    try {
      opportunities = await Opportunities.findByCompanyCode(
        company.company_id,
        BATCH_SIZE,
        BATCH_SIZE * counterOpportunities
      );
      counterOpportunities++;

      for (opportunity of opportunities) {
        await updateTeamMembers(opportunity, company);

        try {
          await job_offers.upsert(
            {
              company_id: company.company_id,
              job_offer_id: opportunity.id,
              active: true,
              opened: opportunity.status == "open",
            },
            { job_offer_id: opportunity.id }
          );
        } catch (error) {
          console.error("Error indexing job offer", opportunity.id);
        }
      }
    } catch (error) {
      console.error("Error searching company", company.company_id);
    }
  }

  return opportunity;
};

const updateTeamMembers = async ({ members }, { company_id }) => {
  for (let member of members) {
    try {
      await team_members.upsert(
        { ...member, company_id },
        { username: member.username }
      );
    } catch (error) {
      console.error("Error updating member: ", member.username);
    }
  }
};

const indexJobOffers = async () => {
  console.log("##### START INDEX JOB OFFERS ####");
  const BATCH_SIZE = 2;
  let companiesLs = [null];
  let counterCompanies = 0;

  const res = await job_offers.update(
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
      const lastOffer = await updateJobOffers(company, BATCH_SIZE);
      //   updateTeamMembers(lastOffer, company);
    }
  }
  console.log("---- END INDEX JOB OFFERS ----");
};

(async () => {
  console.log("SCHEDULE");
  //   schedule.scheduleJob("* * * * *", async () => );
  await indexJobOffers();
})();
