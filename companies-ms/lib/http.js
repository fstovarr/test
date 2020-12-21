const dotenv = require("dotenv");
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

const axios = require("axios").default;

module.exports = {
  search: axios.create({
    baseURL: process.env.URL_TORRE_SEARCH,
    timeout: 5000,
  }),
  bio: axios.create({
    baseURL: process.env.URL_TORRE_BIO,
    timeout: 1000,
  }),
  api: axios.create({
    baseURL: process.env.URL_TORRE_API,
    timeout: 1000,
  }),
};
