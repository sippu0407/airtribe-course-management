// routes/leadRoutes.js
const express = require('express');
const leadController = require('../controllers/leadController');

const router = express.Router();

router.post('/leads', leadController.createLead);
router.put('/leads/:leadId', leadController.updateLead);

router.get('/leads', leadController.searchLeads);


module.exports = router;
