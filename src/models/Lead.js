// models/Lead.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Lead = sequelize.define('Lead', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
  },
  linkedin_profile: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM('Accepted', 'Rejected', 'Waitlist'),
    defaultValue: 'Waitlist',
  },
});


module.exports = Lead;
