const express = require('express');
const cors = require('cors');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();


// Middleware
app.use(express.json());
app.use(cors());

// API routes would be defined here
app.use('/api/v2/expense', expenseRoutes);

module.exports = app;