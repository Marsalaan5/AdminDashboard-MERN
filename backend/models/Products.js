const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true, // Automatically trims spaces from the start and end
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Price cannot be negative
  },
  description: {
    type: String,
    required: true,
    trim: true, // Trims leading and trailing spaces
  },
  image: {
    type: String,
    default: null, // Default to null if no image is uploaded
  },

});

// Add a pre-save hook to update the `updatedAt` field when the document is modified
productSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Create a Product model based on the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
