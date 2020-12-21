const { search, api } = require("../lib/http");

module.exports = class Opportunities {
  static async findByCompanyCode(code, limit = 50, offset = 10) {
    const {
      data: { results },
    } = await search.post(
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

  static async getExtraInfo(id) {
    const {
      data: { slug, attachments },
    } = await api.get(`/opportunities/${id}`);
    const cover = (attachments[0] || {}).address;
    return { slug, cover };
  }
};
