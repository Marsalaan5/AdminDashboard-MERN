const express = require('express');
const Product = require('../models/Products');
const multer = require('multer');
const path = require('path');


const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, 
  },
});

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, category, price, description} = req.body;
    const image = req.file ? req.file.filename : null; 

 
    const newProduct = new Product({
      name,
      category,
      price,
      description,
      image, 
    });

    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (err) {
    res.status(500).json({ message: 'Error adding product', error: err });
  }
});


router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); 
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving products', error: err });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); 
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving product', error: err });
  }
});

// 4. Update a product by ID
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { name, category, price, description } = req.body;
    const image = req.file ? req.file.filename : null;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, category, price, description, image },
      { new: true } 
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (err) {
    res.status(500).json({ message: 'Error updating product', error: err });
  }
});

// 5. Delete a product by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product', error: err });
  }
});



module.exports = router;
