const Sequelize = require('sequelize');
const dotenv = require('dotenv');

const db = new Sequelize('AimazingTest', 'admin', 'Abc12345', {
   host: process.env.DB_CONNECT,
   port: process.env.DB_CONNECT_PORT,
   dialect: 'mysql',
   operatorsAliases: false,
   freezeTableName: true
});

module.exports = db;