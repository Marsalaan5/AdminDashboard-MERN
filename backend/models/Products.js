const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true, 
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    default: null,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  }
  

});

// Add a pre-save hook to update the `updatedAt` field when the document is modified
productSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Create a Product model based on the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
