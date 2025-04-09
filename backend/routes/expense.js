// const express = require('express');
// const Expense = require('../models/Expense');
// const router = express.Router();

// // Fetch all expenses
// router.get('/', async (req, res) => {
//   try {
    
//     const expenses = await Expense.find().populate({ path: 'expense_category', strictPopulate: false });
//     res.json(expenses);
//   } catch (err) {
//     console.error('Error fetching expenses:', err);
//     res.status(500).json({ message: 'Failed to fetch expenses' });
//   }
// });


// router.post('/', async (req, res) => {
//   const {
//     expense_date,
//     expense_for,
//     expense_category,  
//     expense_amount,
//     exp_descrip,
//   } = req.body;

//   if (!expense_for || !expense_amount || !expense_category) {
//     return res.status(400).json({ message: 'Please provide all required fields' });
//   }

//   try {
//     const newExpense = new Expense({
//       expense_date,
//       expense_for,
//       expense_category, 
//       expense_amount,
//       exp_descrip,
//     });

//     await newExpense.save();
//     res.status(201).json(newExpense);
//   } catch (err) {
//     console.error('Error creating expense:', err);
//     res.status(500).json({ message: 'Failed to create expense' });
//   }
// });

// module.exports = router;




// const express = require('express');
// const Expense = require('../models/Expense');
// const router = express.Router();


// router.get('/', async (req, res) => {
//   try {
//     const expenses = await Expense.find().populate({ path: 'expense_category', strictPopulate: false });
//     res.json(expenses);
//   } catch (err) {
//     console.error('Error fetching expenses:', err);
//     res.status(500).json({ message: 'Failed to fetch expenses' });
//   }
// });


// router.post('/', async (req, res) => {
//   const { expense_date, expense_for, expense_category, expense_amount, exp_descrip } = req.body;

//   if (!expense_for || !expense_amount || !expense_category) {
//     return res.status(400).json({ message: 'Please provide all required fields' });
//   }

//   try {
//     const newExpense = new Expense({
//       expense_date,
//       expense_for,
//       expense_category,
//       expense_amount,
//       exp_descrip,
//     });

//     await newExpense.save();
//     res.status(201).json(newExpense);
//   } catch (err) {
//     console.error('Error creating expense:', err);
//     res.status(500).json({ message: 'Failed to create expense' });
//   }
// });


// router.put("/:id", async (req, res) => {
//   try {
//     const { expense_date, expense_for, expense_category, expense_amount, exp_descrip } = req.body;
//     const updatedExpense = await Expense.findByIdAndUpdate(
//       req.params.id,
//       {
//         expense_date, expense_for, expense_category, expense_amount, exp_descrip
//       },
//       { new: true }
//     );
//     res.json(updatedExpense);
//   } catch (error) {
//     console.error("Error updating stock:", error);
//     res.status(500).json({ message: "Error updating expense" });
//   }
// });



// router.delete('/:id', async (req, res) => {
//   try {
//     const expenseId = req.params.id;
//     const deletedExpense = await Expense.findByIdAndDelete(expenseId); // Use ExpenseCategory here, not Category
//     if (!deletedExpense) {
//       return res.status(404).json({ error: 'Expense not found' });
//     }
//     res.json({ message: 'Expense deleted successfully'}); // Return success message
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error while deleting category' });
//   }
// });

// module.exports = router;



const express = require('express');
const Expense = require('../models/Expense');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find().populate({ path: 'expense_category', strictPopulate: false });
    if (expenses.length === 0) {
      return res.status(404).json({ message: 'No expenses found' });
    }
    res.json(expenses);
  } catch (err) {
    console.error('Error fetching expenses:', err);
    res.status(500).json({ message: 'Failed to fetch expenses' });
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const expenses = await  Expense.find().populate('expense_category');
//     res.json(expenses);
//   } catch (error) {
//     console.error("Error fetching expenses:", error);
//     res.status(500).json({ message: "Error fetching expenses" });
//   }
// });


router.post('/', async (req, res) => {
  const { expense_date, expense_for, expense_category, expense_amount, exp_descrip } = req.body;

  if (!expense_for || !expense_amount || !expense_category) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const newExpense = new Expense({
      expense_date,
      expense_for,
      expense_category,
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


router.put('/:id', async (req, res) => {
  const { expense_date, expense_for, expense_category, expense_amount, exp_descrip } = req.body;

  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      { expense_date, expense_for, expense_category, expense_amount, exp_descrip },
      { new: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json(updatedExpense);
  } catch (err) {
    console.error('Error updating expense:', err);
    res.status(500).json({ message: 'Error updating expense' });
  }
});

// Delete an expense by ID
router.delete('/:id', async (req, res) => {
  try {
    const expenseId = req.params.id;
    const deletedExpense = await Expense.findByIdAndDelete(expenseId);

    if (!deletedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json({ message: 'Expense deleted successfully' });
  } catch (err) {
    console.error('Error deleting expense:', err);
    res.status(500).json({ message: 'Server error while deleting expense' });
  }
});

module.exports = router;
