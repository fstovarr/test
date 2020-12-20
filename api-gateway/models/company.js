const { companies } = require("../lib/http");

module.exports = class Company {
  static async get(id) {
    console.log(id);
    const { data } = await companies.get(`/companies/${id}`);
    return data;
  }

  static async create(company) {
    const { data } = await companies.post("/companies/", company);
    return data;
  }

  static async search(name) {
    const { data } = await companies.get(`/companies/search?name=${name}`);
    return data;
  }
};
