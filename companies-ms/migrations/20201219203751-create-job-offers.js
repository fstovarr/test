"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("job_offers", {
      job_offer_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          key: "company_id",
          model: { tableName: "companies" },
        },
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      opened: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("job_offers");
  },
};
