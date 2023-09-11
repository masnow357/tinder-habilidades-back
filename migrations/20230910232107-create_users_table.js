'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      user_name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(200),
        unique: true,
        allowNull: false
      },
      is_company: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
    });
  },
};
