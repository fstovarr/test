"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable("emails_users", {
        email_user_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          index: true,
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: "users",
            },
            key: "user_id",
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
      });

      await queryInterface.addIndex("emails_users", ["email"], {
        indexName: "email_index",
        transaction,
      });

      await queryInterface.addIndex("emails_users", ["email", "active"], {
        indexName: "email_active_index",
        unique: true,
        transaction,
      });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("emails_users");
  },
};
