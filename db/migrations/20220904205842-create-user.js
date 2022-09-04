'use strict';

const { userSchema, USER_TABLE} = require('../../db/models/user.model');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, userSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(USER_TABLE);
  }
};
