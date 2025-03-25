

// const path = require('path');
// const Product = require('./models/Product'); 

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// // Set up Multer for file uploads


  
//   app.post('/api/products', upload.single('image'), async (req, res) => {
//     try {
//       const { name, category, price, description } = req.body;
//       const image = req.file ? req.file.filename : null; // Get filename from uploaded file
  
//       const newProduct = new Product({
//         name,
//         category,
//         price,
//         description,
//         image,
//       });
  
//       await newProduct.save();
//       res.status(201).json({ message: 'Product added successfully', product: newProduct });
//     } catch (err) {
//       res.status(500).json({ message: 'Error adding product', error: err });
//     }
//   });