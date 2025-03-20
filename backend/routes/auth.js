// const express = require('express')
// const router = express.Router();
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const User = require('../models/User.js')


// // const dotenv = require('dotenv');
// // dotenv.config();





// router.post('/register', async (req, res) => {
//     const {name, email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ msg: 'User already exists' });
//         }

//         const newUser = new User({ name,email, password });

//         const salt = await bcrypt.genSalt(10);
//         newUser.password = await bcrypt.hash(password, salt);

//         await newUser.save();


        
//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(201).json({ result: newUser, token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// });


// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
     
//      const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ msg: 'Invalid credentials' });
//         }

   
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ msg: 'Invalid credentials' });
//         }

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        

//         res.status(200).json({ result: user, token });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Something went wrong' });
//       }
//     });


//     router.get("/customers",async(req,res)=>{
//       try{
//           const customers = await Customer.find();
//           res.json(customers);
//       }catch(error){
//           res.status(500).json({error:"Failed to fetch customers"});
//       }
//   })
  
  
//   // Get products
//   router.get("/products", async (req, res) => {
//       try {
//         const products = await Product.find();
//         res.json(products);
//       } catch (err) {
//         res.status(500).json({ error: "Failed to fetch products" });
//       }
//     });
    
//     // Post sale data
//     router.post("/sales", async (req, res) => {
//       try {
//         const { customer, orderDate, products, subtotal, prev_due, netTotal, paidBill, dueBill, paymentMethod } = req.body;
    
//         // Create new sale
//         const newSale = new Sale({
//           customer,
//           orderDate,
//           products,
//           subtotal,
//           prev_due,
//           netTotal,
//           paidBill,
//           dueBill,
//           paymentMethod,
//         });
    
//         await newSale.save();
    
//         // Update product quantities
//         for (let product of products) {
//           await Product.findByIdAndUpdate(product.product, {
//             $inc: { quantity: -product.quantity },
//           });
//         }
    
//         res.status(201).json({ message: "Sale successful" });
//       } catch (err) {
//         res.status(500).json({ error: "Failed to make sale" });
//       }
//     });
  
  
  
  
    
//   // Get all categories
//   router.get("/categories", async (req, res) => {
//       try {
//         const categories = await Category.find();
//         res.json(categories);
//       } catch (err) {
//         res.status(500).json({ message: "Error fetching categories" });
//       }
//     });
    
//     // Add a new category
//     router.post("/api/categories", async (req, res) => {
//       try {
//         const { name, description } = req.body;
//         const category = new Category({ name, description });
//         await category.save();
//         res.status(201).json(category);
//       } catch (err) {
//           console.error("Error adding category:", err);
//         res.status(500).json({ message: "Error adding category" });
//       }
//     });

// module.exports = router;



const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Customer = require('../models/Customer');
const Product = require('../models/Product');
const Sale = require('../models/Sale');
const Category = require('../models/Category');

// Register new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const newUser = new User({ name, email, password });

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ result: newUser, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

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

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ result: user, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// Get customers
router.get("/customers", async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch customers", details: error.message });
    }
});

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

module.exports = router;
