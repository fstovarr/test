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
          name: "Angela Serrano",
          createdAt: new Date(),
          updatedAt: new Date(),
          weight: 0.0,
        },
        {
          team_member_id: 2,
          company_id: 573462,
          username: "andresgfranco",
          name: "Andrés Franco",
          createdAt: new Date(),
          updatedAt: new Date(),
          weight: 1.0,
        },
        {
          team_member_id: 3,
          company_id: 573462,
          username: "davidvelasquezm",
          name: "Devid Velasquez",
          createdAt: new Date(),
          updatedAt: new Date(),
          weight: 2.0,
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
