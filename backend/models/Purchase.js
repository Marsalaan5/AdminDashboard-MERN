const mongoose = require('mongoose');


const purchaseSchema = new mongoose.Schema({
  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Supplier',
    required: true,
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stock',
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
  },
  buyPrice: {
    type: Number,
    required: true,
  },
  purchaseQuantity: {
    type: Number,
    required: true,
  },
  sellPrice: {
    type: Number,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  prevDue: {
    type: Number,
    default: 0, 
  },
  netTotal: {
    type: Number,
    required: true,
  },
  paidBill: {
    type: Number,
    required: true,
  },
  dueBill: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    // enum: ['Cash', 'Credit', 'Debit', 'Online'], 
    required: true,
  },
}, { timestamps: true }); 


const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
