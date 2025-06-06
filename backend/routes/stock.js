const express = require("express");
const Stock = require("../models/Stock");
const Product = require("../models/Products")
const router = express.Router();
const {isAdmin} = require("../middleware/auth.js")

// GET all stocks
router.get("/", async (req, res) => {
  try {
    const stocks = await Stock.find().populate("s_category");
    res.json(stocks);
  } catch (error) {
    console.error("Error fetching stocks:", error);
    res.status(500).json({ message: "Error fetching stocks" });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id).populate("s_category");
    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }
    res.json(stock);
  } catch (error) {
    console.error("Error fetching stock by ID:", error);
    res.status(500).json({ message: "Error fetching stock by ID" });
  }
});



router.post("/",async (req, res) => {
  try {
    const { stock_name, brand, s_category, s_source, sku, alert_quantity, buy_price, selling_price } = req.body;

    const newStock = new Stock({
      stock_name,
      brand,
      s_category,
      s_source,
      sku,
      alert_quantity,
      buy_price,
      selling_price,
    });

    const savedStock = await newStock.save();
    res.status(201).json(savedStock);
  } catch (error) {
    console.error("Error adding stock:", error);
    res.status(500).json({ message: "Error adding stock" });
  }
});


router.put("/:id",isAdmin, async (req, res) => {
  try {
    const { stock_name, brand, s_category, s_source, sku, alert_quantity, buy_price, selling_price } = req.body;
    const updatedStock = await Stock.findByIdAndUpdate(
      req.params.id,
      {
        stock_name,
        brand,
        s_category,
        s_source,
        sku,
        alert_quantity,
        buy_price,
        selling_price,
      },
      { new: true }
    );
    res.json(updatedStock);
  } catch (error) {
    console.error("Error updating stock:", error);
    res.status(500).json({ message: "Error updating stock" });
  }
});

// DELETE a stock by ID
router.delete("/:id",isAdmin, async (req, res) => {
  try {
    await Stock.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Stock deleted successfully" });
  } catch (error) {
    console.error("Error deleting stock:", error);
    res.status(500).json({ message: "Error deleting stock" });
  }
});

module.exports = router;
