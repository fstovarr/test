"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "users",
      [
        {
          first_name: "Fabio",
          last_name: "Tovar",
          password_digest: "5136461ac673347506978fac8df186d94eedf73b3c0bf7bbd973a4943218e0ba",
          domain: "torre",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Fabio2",
          last_name: "Tovar",
          password_digest: "5136461ac673347506978fac8df186d94eedf73b3c0bf7bbd973a4943218e0ba",
          domain: "torre",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete(
      "users",
      { last_name: "Tovar" },
      {}
    );
  },
};
