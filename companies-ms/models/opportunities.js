const http = require("../lib/http");

module.exports = class Opportunities {
  static async findByCompanyCode(code, limit = 50, offset = 10) {
    const {
      data: { results },
    } = await http.search.post(
      "/opportunities/_search/",
      {
        or: [{ organization: { code } }],
      },
      {
        params: {
          size: limit,
          offset,
        },
      }
    );
    return results;
  }
};
