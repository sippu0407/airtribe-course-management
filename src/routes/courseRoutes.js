// routes/courseRoutes.js
const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

router.post('/courses', courseController.createCourse);
router.put('/courses/:courseId', courseController.updateCourse);


module.exports = router;
