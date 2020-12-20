"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "team_members",
      [
        {
          team_member_id: 1,
          company_id: 573462,
          username: "am.serranoariza",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          team_member_id: 2,
          company_id: 573462,
          username: "andresgfranco",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          team_member_id: 3,
          company_id: 573462,
          username: "davidvelasquezm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
