const mongoose = require('mongoose');

const expenseCategorySchema = new mongoose.Schema({
    
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
    

const ExpenseCategory = mongoose.model('ExpenseCategory', expenseCategorySchema);

module.exports = ExpenseCategory;
