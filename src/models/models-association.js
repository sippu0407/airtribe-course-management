const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Course = require('./Course');
const Comment=require('./Comment');
const Lead = require('./Lead');
const Instructor = require('./Instructor');


// Course associations
Course.belongsTo(Instructor);
Course.hasMany(Lead);
Course.hasMany(Comment);

// Lead associations
Lead.belongsTo(Course);
Lead.hasMany(Comment);

// Comment associations
Comment.belongsTo(Lead);

// Instructor associations
Instructor.hasMany(Course);

module.exports = { Course, Lead, Comment, Instructor };