// const mongoose= require("mongoose")

// const Category = mongoose.model("Category", new mongoose.Schema({
//     name: String,
//     description: String,
//   }));
  

const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, 
      trim: true,
      unique: true, 
      minlength: [3, 'Category name must be at least 3 characters long'], 
      maxlength: [50, 'Category name must be at most 50 characters long'],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: [5, 'Description must be at least 5 characters long'], 
      maxlength: [255, 'Description must be at most 255 characters long'], 
    },
  },
  {
    timestamps: true, 
  }
);


const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
