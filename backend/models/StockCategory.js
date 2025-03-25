const mongoose = require('mongoose');

const stockCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
//   parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }, // Reference to Category model
//   isActive: { type: Boolean, default: true },
//   discountPercentage: { type: Number, default: 0 },
});

module.exports = mongoose.model('StockCategory', stockCategorySchema);
