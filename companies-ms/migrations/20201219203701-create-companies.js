"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable("companies", {
        company_id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        location_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            key: "location_id",
            model: { tableName: "locations" },
          },
        },
        user_id: {
          type: Sequelize.INTEGER,
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
        reputation_avg: {
          type: Sequelize.DOUBLE,
        },
      });

      await queryInterface.addIndex("companies", ["user_id"], {
        indexName: "user_index",
        transaction,
      });

      await queryInterface.addIndex("companies", ["location_id"], {
        indexName: "location_index",
        transaction,
      });

      transaction.commit();
    } catch (error) {
      transaction.rollback();
      throw error;
    }
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("companies");
  },
};
