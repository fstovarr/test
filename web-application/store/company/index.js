export const actions = {
  async create({ commit }, company) {
    try {
      const createdCompany = await this.$axios.$post("/companies/", company);

      commit("setCompany", createdCompany);

      return Promise.resolve(createdCompany);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export const getters = {};

export const mutations = {
  setCompany(state, company) {
    state.company = company;
  },
};

export const state = () => ({
  company: undefined,
});
