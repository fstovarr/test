export const actions = {};

export const getters = {};

export const mutations = {
  setMembers(state, members) {
    state.members = members;
  },
  clean(state) {
    state.members = {};
  },
};

export const state = () => ({
  members: {},
});
