const express = require('express');
const ExpenseCategory = require('../models/ExpenseCategory');
const router = express.Router();

// Get all categories
router.get('/', async (req, res) => {
  try {
    const expenseCategories = await ExpenseCategory.find(); // Use ExpenseCategory here, not Category
    res.json(expenseCategories);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Add a new category
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;

   
    const newExpenseCategory = new ExpenseCategory({
      name,
      description,
    });

    const savedExpenseCategory = await newExpenseCategory.save(); 

    res.status(201).json(savedExpenseCategory); 
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error creating category' }); 
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await ExpenseCategory.findByIdAndDelete(categoryId); // Use ExpenseCategory here, not Category
    if (!deletedCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json({ message: 'Category deleted' }); // Return success message
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error while deleting category' });
  }
});

module.exports = router;
