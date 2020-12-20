"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable("users", {
        user_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        first_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        last_name: {
          type: Sequelize.STRING,
        },
        domain: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        picture: {
          type: Sequelize.STRING,
        },
        password_digest: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
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

      await queryInterface.addIndex("users", ["password_digest"], {
        indexName: "password_user_index",
        transaction,
      });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
