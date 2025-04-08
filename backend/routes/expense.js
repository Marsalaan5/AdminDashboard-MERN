const express = require('express');
const Expense = require('../models/Expense');  
const router = express.Router();



router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find().populate('expense_catagory');
    res.json(expenses);
  } catch (err) {
    console.error('Error fetching expenses:', err);
    res.status(500).json({ message: 'Failed to fetch expenses' });
  }
});

// Add a new expense
router.post('/', async (req, res) => {
  const {
    expense_date,
    expense_for,
    expense_catagory,
    expense_amount,
    exp_descrip,
  } = req.body;

  if (!expense_for || !expense_amount || !expense_catagory) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const newExpense = new Expense({
      expense_date,
      expense_for,
      expense_catagory,
      expense_amount,
      exp_descrip,
    });

    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    console.error('Error creating expense:', err);
    res.status(500).json({ message: 'Failed to create expense' });
  }
});

module.exports = router;


// const express = require('express');
// const Expense = require('../models/Expense');
// const router = express.Router();

// // Get all expenses with populated categories
// router.get('/', async (req, res) => {
//   try {
//     const expenses = await Expense.find().populate('expense_category'); // Consistent field name
//     res.json(expenses);
//   } catch (err) {
//     console.error('Error fetching expenses:', err);
//     res.status(500).json({ message: 'Failed to fetch expenses' });
//   }
// });

// // Add a new expense
// router.post('/', async (req, res) => {
//   const { expense_date, expense_for, expense_category, expense_amount, exp_descrip } = req.body;

//   // Validate required fields
//   if (!expense_for || !expense_amount || !expense_category) {
//     return res.status(400).json({ message: 'Please provide all required fields' });
//   }

//   try {
//     // Create a new expense document
//     const newExpense = new Expense({
//       expense_date,
//       expense_for,
//       expense_category, // Consistent field name
//       expense_amount,
//       exp_descrip,
//     });

//     // Save the new expense to the database
//     await newExpense.save();

//     // Respond with the created expense
//     res.status(201).json(newExpense);
//   } catch (err) {
//     console.error('Error creating expense:', err);
//     res.status(500).json({ message: 'Failed to create expense' });
//   }
// });

// module.exports = router;
