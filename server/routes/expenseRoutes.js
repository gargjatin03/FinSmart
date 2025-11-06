const express = require('express');
const expenseRouter = require('../controllers/expenseController');

const router = express.Router();

// Define your expense routes here
router
    .get('/', expenseRouter.getAllExpense)
    .post('/', expenseRouter.createExpense);

router
    .put('/:id', expenseRouter.updateExpense)
    .delete('/:id', expenseRouter.deleteExpense);

module.exports = router;
