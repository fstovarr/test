const { team_members } = require("../models/index");

module.exports = class TeamMembers {
  static async updateTeamMembers({ members }, { company_id }) {
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
  }
};
