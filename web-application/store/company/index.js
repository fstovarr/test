export const actions = {
  async create({ commit }, company) {
    try {
      const { token } = await this.$axios.$post("/company/", company);

      commit("setCompany", company);

      return Promise.resolve(token);
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
