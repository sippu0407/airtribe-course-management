// controllers/leadController.js
const Lead = require('../models/Lead');
const { Sequelize } = require('sequelize');


const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json(lead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateLead = async (req, res) => {
  const { leadId } = req.params;
  try {
    const lead = await Lead.findByPk(leadId);
    if (lead) {
      await lead.update(req.body);
      res.status(200).json(lead);
    } else {
      res.status(404).json({ error: 'Lead not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const searchLeads = async (req, res) => {
    const { name, email } = req.query;
    try {
      const leads = await Lead.findAll({
        where: {
          [Sequelize.Op.or]: [
            { name: { [Sequelize.Op.like]: `%${name}%` } },
            { email: { [Sequelize.Op.like]: `%${email}%` } },
          ],
        },
      });
      res.status(200).json(leads);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  };
  
  

module.exports = {
  createLead,
  updateLead,
  searchLeads
}