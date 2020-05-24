'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    const { INTEGER, STRING, DATE } = Sequelize;
    return queryInterface.createTable('counts', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      count: {
        type: INTEGER
      },
      time: {
        type: INTEGER
      },
      created_at: {
        type: DATE
      },
      updated_at: {
        type: DATE
      }
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('counts');
  }
};