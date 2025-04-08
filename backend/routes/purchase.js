const express = require('express');
const Purchase = require('../models/Purchase');
const Product = require('../models/Products'); // Import Product model
const router = express.Router();

// Purchase a product
router.post('/api/purchase', async (req, res) => {
  try {
    const { supplierId, purchaseDate, productId, stockQuantity, buyPrice, purchaseQuantity, sellPrice, subtotal, prevDue, netTotal, paidBill, dueBill, paymentMethod } = req.body;

    // Create a new purchase entry
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

    // Update product stock after purchase
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Update the stock quantity after purchase
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
