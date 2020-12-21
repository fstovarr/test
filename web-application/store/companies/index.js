export const actions = {
  async create({ commit }, company) {
    try {
      const createdCompany = await this.$axios.$post("/companies/", company);

      commit("setCompany", createdCompany);

      return createdCompany;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async fetch({ commit }) {
    try {
      const company = await this.$axios.$get("/companies");
      commit("setCompany", company);
      console.log("COMPANY ", company);
      commit("members/setMembers", company.team_members, { root: true });
      commit("offers/setOffers", company.job_offers, { root: true });
      return company;
    } catch (error) {
      console.error(error);
    }
  },
};

export const getters = {};

export const mutations = {
  setCompany(state, company) {
    state.company = company;
  },
  clean(state) {
    state.company = {};
  },
};

export const state = () => ({
  company: {},
});
