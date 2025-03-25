const express = require('express');
const router = express.Router();
const StockCategory = require('../models/StockCategory');

// Route: GET all stock categories
router.get('/', async (req, res) => {
    console.log("Error//////////////////////////")
  try {
    console.log("Fetching all categories...");  
    const stock_categories = await StockCategory.find();
    console.log("Categories fetched successfully:", stock_categories); 
    res.json(stock_categories);  
  } catch (err) {
    console.error('Error fetching categories:', err);  
    res.status(500).json({ message: 'Error fetching categories', error: err.message });
  }
});

// Route: GET a single stock category by ID
router.get('/:id', async (req, res) => {  
  try {
    const stock_category = await StockCategory.findById(req.params.id);
    if (!stock_category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(stock_category);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching category', error: err.message });
  }
});

// Route: POST (Create) a new stock category
router.post('/', async (req, res) => {
  const { name, description, parentCategory, isActive, discountPercentage } = req.body;

  try {
    const newStockCategory = new StockCategory({
      name,
      description,
      parentCategory,
      isActive,
      discountPercentage,
    });

    await newStockCategory.save();
    res.status(201).json({ message: 'Category created successfully', stock_category: newStockCategory });
  } catch (err) {
    res.status(400).json({ message: 'Error creating category', error: err.message });
  }
});


router.put('/:id', async (req, res) => { 
  try {
    const updatedStockCategory = await StockCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } 
    );

    if (!updatedStockCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.json({ message: 'Category updated successfully', stock_category: updatedStockCategory });
  } catch (err) {
    res.status(400).json({ message: 'Error updating category', error: err.message });
  }
});


router.delete('/:id', async (req, res) => { 
  try {
    const deletedStockCategory = await StockCategory.findByIdAndDelete(req.params.id);
    if (!deletedStockCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.json({ message: 'Category deleted successfully', stock_category: deletedStockCategory });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting category', error: err.message });
  }
});

module.exports = router;
