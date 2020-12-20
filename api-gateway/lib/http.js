const dotenv = require("dotenv");
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

const axios = require("axios").default;

module.exports = {
  users: axios.create({
    baseURL: process.env.URL_USERS_MS,
    timeout: 300,
  }),
  companies: axios.create({
    baseURL: process.env.URL_COMPANIES_MS,
    timeout: 5000,
  }),
};
