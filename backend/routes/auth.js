
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authenticate, authorizeRoles } = require('../middleware/auth');
const User = require('../models/User');
const Customer = require('../models/Customer');
const Product = require('../models/Products');
const Sale = require('../models/Sale');
const Category = require('../models/Category');
const StockCategory = require('../models/StockCategory');

// Register new user
router.post('/register', async (req, res) => {
  const { name, email, password, role = 'user', status = 'active' } = req.body;

  try {
      const user = await User.findOne({ email });
      if (user) {
          return res.status(400).json({ msg: 'User already exists' });
      }

      const newUser = new User({ name, email, password, role, status });

      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);

      await newUser.save();

      const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, {
          expiresIn: '1h',
      });

      res.status(201).json({ result: newUser, token });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong' });
  }
});



// router.post('/register', async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ msg: 'User already exists' });
//         }

//         const newUser = new User({ name, email, password });

//         const salt = await bcrypt.genSalt(10);
//         newUser.password = await bcrypt.hash(password, salt);

//         await newUser.save();

//         const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });


//         res.status(201).json({ result: newUser, token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// });

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ result: user, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// // Get customers
// router.get("/customers", async (req, res) => {
//     try {
//         const customers = await Customer.find();
//         res.json(customers);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch customers", details: error.message });
//     }
// });

// Get products
router.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products", details: err.message });
    }
});

// Post sale data
router.post("/sales", async (req, res) => {
    try {
        const { customer, orderDate, products, subtotal, prev_due, netTotal, paidBill, dueBill, paymentMethod } = req.body;

        const newSale = new Sale({
            customer,
            orderDate,
            products,
            subtotal,
            prev_due,
            netTotal,
            paidBill,
            dueBill,
            paymentMethod,
        });

        await newSale.save();

        for (let product of products) {
            await Product.findByIdAndUpdate(product.product, {
                $inc: { quantity: -product.quantity },
            });
        }

        res.status(201).json({ message: "Sale successful" });
    } catch (err) {
        res.status(500).json({ error: "Failed to make sale", details: err.message });
    }
});


// Backend (API route)
router.get('/api/stocks/:id', async (req, res) => {
  console.log("Request for product ID:", req.params.id);  
  try {

    const product = await Product.findById(req.params.id); 
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product); // Send product data as JSON
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: 'Failed to fetch product details' });
  }
});


// Get all categories
router.get("/categories", async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: "Error fetching categories", details: err.message });
    }
});

// Add a new category
router.post("/categories", async (req, res) => {
    try {
        const { name, description } = req.body;
        const category = new Category({ name, description });
        await category.save();
        res.status(201).json(category);
    } catch (err) {
        console.error("Error adding category:", err);
        res.status(500).json({ message: "Error adding category", details: err.message });
    }
});



// Route: GET all categories
router.get('/stock_categories', async (req, res) => {
  try {
    const categories = await StockCategory.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching categories', error: err });
  }
});

// Route: GET a single category by ID
router.get('/stock_categories/:id', async (req, res) => {
  try {
    const category = await StockCategory.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching category', error: err });
  }
});

// Route: POST (Create) a new category
router.post('/stock_categories', async (req, res) => {
  const { name, description, parentCategory, isActive, discountPercentage } = req.body;

  try {
    const newCategory = new StockCategory({
      name,
      description,
      parentCategory,
      isActive,
      discountPercentage,
    });

    await newCategory.save();
    res.status(201).json({ message: 'Category created successfully', category: newCategory });
  } catch (err) {
    res.status(400).json({ message: 'Error creating category', error: err });
  }
});

// Route: PUT (Update) a category by ID
router.put('/stock_categories/:id', async (req, res) => {
  try {
    const updatedCategory = await StockCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated category
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.json({ message: 'Category updated successfully', category: updatedCategory });
  } catch (err) {
    res.status(400).json({ message: 'Error updating category', error: err });
  }
});

 // Route: DELETE a category by ID
router.delete('/stock_categories/:id', async (req, res) => {
  try {
    const deletedCategory = await StockCategory.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.json({ message: 'Category deleted successfully', category: deletedCategory });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting category', error: err });
  }
});


router.post('/api/customers', async (req, res) => {
  const { name, company, address, contact, email, cus_open_blacnce, reg_date } = req.body;

  // Validate the required fields
  if (!name) {
      return res.status(400).json({ message: "Name field required" });
  }

  // Generate member ID based on time
  const member_id = `C${Date.now()}`;

  try {
      // Create new member
      const newMember = new Member({
          member_id,
          name,
          company,
          address,
          con_num: contact,
          email,
          total_due: cus_open_blacnce,
          reg_date: new Date(reg_date), // Convert string date to Date object
          update_by: 1,
      });

      const member = await newMember.save();

      // Create new customer balance entry
      const customerBalance = new CustomerBalance({
          cus_id: member._id,
          due_balance: cus_open_blacnce,
      });

      await customerBalance.save();

      return res.status(201).json({ message: "Customer added successfully" });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to add member, please try again" });
  }
});

// Add a new supplier
router.post('/api/suppliers', async (req, res) => {
  const { name, company, address, contact, email, sup_open_blacnce, reg_date } = req.body;

  if (!name) {
      return res.status(400).json({ message: "Name field required" });
  }

  const supplier = new Supplier({
      name,
      company,
      address,
      contact,
      email,
      total_due: sup_open_blacnce,
      reg_date: new Date(reg_date),
  });

  try {
      await supplier.save();
      return res.status(201).json({ message: "Supplier added successfully" });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to add supplier, please try again" });
  }
});

module.exports = router;
