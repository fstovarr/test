"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable("team_members", {
        team_member_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        company_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            key: "company_id",
            model: { tableName: "companies" },
          },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        weight: {
          allowNull: false,
          defaultValue: 0.0,
          type: Sequelize.DOUBLE,
        },
      });
      await queryInterface.addIndex("team_members", ["username"], {
        indexName: "username_index",
        transaction,
      });
      transaction.commit();
    } catch (err) {
      transaction.rollback();
      throw err;
    }
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("team_members");
  },
};
