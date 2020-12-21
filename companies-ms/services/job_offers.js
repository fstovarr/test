const Opportunities = require("../models/opportunities");
const { job_offers } = require("../models/index");
const TeamMembers = require("./team_members");

module.exports = class JobOffersService {
  static async updateJobOffers(company, BATCH_SIZE = 50) {
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
          await TeamMembers.updateTeamMembers(opportunity, company);
          const info = await Opportunities.getExtraInfo(opportunity.id);

          try {
            await job_offers.upsert(
              {
                ...info,
                company_id: company.company_id,
                job_offer_id: opportunity.id,
                objective: opportunity.objective,
                type: opportunity.type,
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
        console.error("Error searching company", company.company_id, error);
      }
    }

    return opportunity;
  }
};
