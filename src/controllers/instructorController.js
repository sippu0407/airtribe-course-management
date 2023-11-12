// controllers/instructorController.js
const Instructor = require('../models/Instructor');

const createInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.create(req.body);
    res.status(201).json(instructor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createInstructor,
};
