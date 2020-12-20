"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "emails_users",
      [
        {
          email: "fabiostovarr@gmail.com",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("emails_users", { user_id: 1 }, {});
  },
};
