'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('medicamentos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
     },

     nome: {
        type: Sequelize.STRING,
        allowNull: false,
     },
     info:{
        type: Sequelize.STRING,
        allowNull: false,
     },
     img:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at:{
      type:Sequelize.DATE,
      allowNull: false,
    },
    updated_at:{
      type:Sequelize.DATE,
      allowNull: false,
    }
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('medicamentos');
  }
};
