
const express = require('express');
const Purchase = require('../models/Purchase');
const Product = require('../models/Products'); 
const Supplier = require('../models/Supplier');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      supplierName, 
      purchaseDate,
      productId,
      stockQuantity,
      buyPrice,
      purchaseQuantity,
      sellPrice,
      subtotal,
      prevDue,
      netTotal,
      paidBill,
      dueBill,
      paymentMethod
    } = req.body;

    
    const supplier = await Supplier.findOne({ name: supplierName });
    
    if (!supplier) {
      return res.status(404).json({ error: 'Supplier not found' });
    }

    const supplierId = supplier._id; 

   
    const purchase = new Purchase({
      supplierId, 
      purchaseDate,
      productId,
      stockQuantity,
      buyPrice,
      purchaseQuantity,
      sellPrice,
      subtotal,
      prevDue,
      netTotal,
      paidBill,
      dueBill,
      paymentMethod,
    });

    await purchase.save();

   
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    product.stock_quantity -= purchaseQuantity;

    if (product.stock_quantity < 0) {
      return res.status(400).json({ error: 'Not enough stock available for the purchase' });
    }

    await product.save();

    res.status(200).json({ message: 'Product purchased successfully' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Failed to process the purchase' });
  }
});

module.exports = router;
