// controllers/courseController.js
const Course = require('../models/Course');

const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateCourse = async (req, res) => {
  const { courseId } = req.params;
  try {
    const course = await Course.findByPk(courseId);
    if (course) {
      await course.update(req.body);
      res.status(200).json(course);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  createCourse,
  updateCourse,

};

