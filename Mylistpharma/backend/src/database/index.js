const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Medicamento=require('../models/Medicamento');

const connection = new Sequelize(dbConfig);
Medicamento.init(connection);

module.exports=connection;