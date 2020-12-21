import { sha256 } from "js-sha256";

export const actions = {
  initState({ commit }) {
    commit("setToken", this.$cookiz.get("token"));
  },
  async login({ commit }, { email, password }) {
    const password_digest = sha256
      .create()
      .update(password)
      .hex();

    try {
      const { token } = await this.$axios.$post("/auth/signin", {
        email,
        password: password_digest,
      });

      commit("setToken", token);

      return Promise.resolve(token);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async signup(
    { commit, dispatch },
    { password, name, email, location_id, company_id, description }
  ) {
    try {
      const password_digest = sha256
        .create()
        .update(password)
        .hex();
      const splittedName = name.split(" ");
      const { token } = await this.$axios.$post("/auth/signup", {
        first_name: splittedName[0],
        password: password_digest,
        email: email,
      });

      commit("setToken", token);

      await dispatch(
        "companies/create",
        {
          location_id,
          company_id,
          description,
        },
        { root: true }
      );

      return Promise.resolve(token);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async logout({ commit }) {
    try {
      commit("removeToken");
      commit("offers/clean", { root: true });
      commit("companies/clean", { root: true });
      commit("members/clean", { root: true });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

// import jwt from 'jwt-decode'
export const getters = {
  isAuthenticated: (state) => state.token !== undefined,
};

export const mutations = {
  setToken(state, token) {
    if (token !== undefined) {
      this.$cookiz.set("token", token);
    } else {
      this.$cookiz.remove("token");
    }

    this.$axios.setToken(token, "Bearer");

    state.token = token;
  },
  removeToken(state) {
    this.$cookiz.remove("token");
    state.token = undefined;
    this.$axios.setToken(undefined, "Bearer");
  },
};

export const state = () => ({
  token: undefined,
});
