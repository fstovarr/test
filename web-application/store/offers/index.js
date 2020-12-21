export const actions = {};

export const getters = {};

export const mutations = {
  setOffers(state, offers) {
    state.offers = offers;
  },
  clean(state) {
    state.offers = {};
  },
};

export const state = () => ({
  offers: {},
});
