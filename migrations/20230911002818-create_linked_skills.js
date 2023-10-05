'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('Users', { id: Sequelize.INTEGER });
     */
    queryInterface.createTable('Linked_skills', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },

      },
      skill_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Skills',
          key: 'id'
        },
      }
    });
  }
};
