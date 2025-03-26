const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  stock_name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  s_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  s_source: {
    type: String,
    default: "factory",
  },
  sku: String,
  alert_quantity: {
    type: Number,
    required: true,
  },
  buy_price: Number,
  selling_price: Number,
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
