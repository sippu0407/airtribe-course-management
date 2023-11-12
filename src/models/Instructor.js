// models/Instructor.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Instructor = sequelize.define('Instructor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = Instructor;
