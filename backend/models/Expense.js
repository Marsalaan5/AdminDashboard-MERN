const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({

  expense_for: { type: String, required: true },
  expense_amount: { type: Number, required: true },
  expense_date: { type: Date, required: true },
  exp_descrip: { type: String, required: true },
  expense_category: { type: mongoose.Schema.Types.ObjectId, ref: 'ExpenseCategory' },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;

