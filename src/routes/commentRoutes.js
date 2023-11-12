// routes/commentRoutes.js
const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.post('/comments', commentController.createComment);


module.exports = router;
