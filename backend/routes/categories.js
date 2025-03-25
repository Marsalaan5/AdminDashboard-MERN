// const express = require('express');
// const router = express.Router();

// let categories = [];

// router.post('/', (req, res) => {
//   const { name, description } = req.body;
  
//   // Validate the input
//   if (!name || !description) {
//     return res.status(400).json({ error: 'Name and description are required' });
//   }

//   const newCategory = { id: categories.length + 1, name, description };
//   categories.push(newCategory);
//   res.status(201).json(newCategory); 
// });

// router.get('/', (req, res) => {
//   res.json(categories);
// });

// module.exports = router;


const express = require('express');
const Category = require('../models/Category'); 
const router = express.Router();

// Get all categories
router.get('/api/categories', async (req, res) => {
  try {
    const categories = await Category.find(); 
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Add a new category
router.post('/api/categories', async (req, res) => {
  try {
    const { name, description } = req.body;

    // Create a new category instance and save it
    const newCategory = new Category({
      name,
      description,
    });

    const savedCategory = await newCategory.save(); // Save to database

    res.status(201).json(savedCategory); // Return the saved category
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error creating category' }); // Handle errors
  }
});

// Delete a category
router.delete('/api/categories/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await Category.findByIdAndDelete(categoryId); // Delete by ID
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
