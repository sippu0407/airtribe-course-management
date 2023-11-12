const {DB_NAME,DB_USER,DB_PASSWORD}=require('./serverConfig');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
