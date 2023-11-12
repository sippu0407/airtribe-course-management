// server.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const instructorRoutes = require('./routes/instructorRoutes');
const courseRoutes = require('./routes/courseRoutes');
const leadRoutes = require('./routes/leadRoutes');
const commentRoutes = require('./routes/commentRoutes');
const {PORT}=require('./config/serverConfig');
const { Course, Lead, Comment, Instructor }=require('./models/models-association');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', instructorRoutes);
app.use('/api', courseRoutes);
app.use('/api', leadRoutes);
app.use('/api', commentRoutes);

sequelize.sync({ alter : true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
