"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "companies",
      [
        {
          company_id: 573462,
          location_id: 226,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          name: "Bunny Studio",
          picture:
            "https://res.cloudinary.com/torre-technologies-co/image/upload/v1600929840/origin/bio/organizations/Bunny_Studio_bq79wl.jpg",
        },
        {
          company_id: 533386,
          location_id: 47,
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          name: "Rappi",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {},
};
