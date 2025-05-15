const express = require('express');
const Supplier = require('../models/Supplier'); 
const router = express.Router();
const mongoose = require("mongoose");


router.get('/', async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// // Add a new supplier
// router.post('/', async (req, res) => {
//   const { name, company, address, contact, total_buy, total_paid, total_due } = req.body;

//   const newSupplier = new Supplier({
//     name,
//     company,
//     address,
//     contact,
//     total_buy,
//     total_paid,
//     total_due,
//   });

//   try {
//     const savedSupplier = await newSupplier.save();
//     res.status(201).json(savedSupplier);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

router.post('/', async (req, res) => {
  const { name, company, address, contact, total_buy, total_paid, total_due } = req.body;

  // Generate a unique key if needed
  const key = `${company}_${Date.now()}`;

  const newSupplier = new Supplier({
    name,
    company,
    address,
    contact,
    total_buy,
    total_paid,
    total_due,
    key, // ← Add key field
  });

  try {
    const savedSupplier = await newSupplier.save();
    res.status(201).json(savedSupplier);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Update an existing supplier (optional)
router.put('/:id', async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id); // Change from 'supplier' to 'Supplier'

    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }

    const { name, company, address, contact, total_buy, total_paid, total_due } = req.body;

    supplier.name = name || supplier.name;
    supplier.company = company || supplier.company;
    supplier.address = address || supplier.address;
    supplier.contact = contact || supplier.contact;
    supplier.total_buy = total_buy || supplier.total_buy;
    supplier.total_paid = total_paid || supplier.total_paid;
    supplier.total_due = total_due || supplier.total_due;

    const updatedSupplier = await supplier.save();
    res.json(updatedSupplier);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a supplier
router.delete('/:id', async (req, res) => {
  const supplierId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(supplierId)) {
    return res.status(400).json({ message: 'Invalid supplier ID' });
  }

  try {
    const supplier = await Supplier.findOneAndDelete({ _id: supplierId });

    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }

    res.json({ message: 'Supplier deleted', supplier });
  } catch (err) {
    console.error(err);  // Log error for debugging
    res.status(500).json({ message: 'Server error during deletion' });
  }
});

module.exports = router;



// const express = require('express');
// const Supplier = require('../models/Supplier'); // Make sure to use Supplier here
// const router = express.Router();
// const mongoose = require("mongoose");


// router.get('/', async (req, res) => {
//   try {
//     const suppliers = await Supplier.find();
//     res.json(suppliers);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Add a new supplier
// router.post('/', async (req, res) => {
//   const { name, company, address, contact, total_buy, total_paid, total_due } = req.body;

//   const newSupplier = new Supplier({
//     name,
//     company,
//     address,
//     contact,
//     total_buy,
//     total_paid,
//     total_due,
//   });

//   try {
//     const savedSupplier = await newSupplier.save();
//     res.status(201).json(savedSupplier);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Update an existing supplier (optional)
// router.put('/:id', async (req, res) => {
//   try {
//     const supplier = await Supplier.findById(req.params.id); // Change from 'supplier' to 'Supplier'

//     if (!supplier) {
//       return res.status(404).json({ message: 'Supplier not found' });
//     }

//     const { name, company, address, contact, total_buy, total_paid, total_due } = req.body;

//     supplier.name = name || supplier.name;
//     supplier.company = company || supplier.company;
//     supplier.address = address || supplier.address;
//     supplier.contact = contact || supplier.contact;
//     supplier.total_buy = total_buy || supplier.total_buy;
//     supplier.total_paid = total_paid || supplier.total_paid;
//     supplier.total_due = total_due || supplier.total_due;

//     const updatedSupplier = await supplier.save();
//     res.json(updatedSupplier);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Delete a supplier
// router.delete('/:id', async (req, res) => {
//   const supplierId = req.params.id;

//   if (!mongoose.Types.ObjectId.isValid(supplierId)) {
//     return res.status(400).json({ message: 'Invalid supplier ID' });
//   }

//   try {
//     const supplier = await Supplier.findOneAndDelete({ _id: supplierId });

//     if (!supplier) {
//       return res.status(404).json({ message: 'Supplier not found' });
//     }

//     res.json({ message: 'Supplier deleted', supplier });
//   } catch (err) {
//     console.error(err);  // Log error for debugging
//     res.status(500).json({ message: 'Server error during deletion' });
//   }
// });

// module.exports = router;