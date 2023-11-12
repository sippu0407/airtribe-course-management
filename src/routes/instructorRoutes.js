// routes/instructorRoutes.js
const express = require('express');
const instructorController = require('../controllers/instructorController');

const router = express.Router();

router.post('/instructors', instructorController.createInstructor);

module.exports = router;
