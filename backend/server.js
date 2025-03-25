
const fs = require('fs');
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv= require('dotenv')
// const bodyParser = require("body-parser");
const multer = require('multer');
const path = require('path');
// require('dotenv').config();

dotenv.config();


const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}



const productRoutes = require('./routes/product.js');
const authRoutes = require('./routes/auth.js')
const categoryRoutes = require('./routes/categories.js');
const stockCategoryRoutes = require('./routes/stock_categories.js');
const customerRoutes = require("./routes/customer.js"); 
const supplierRoutes = require("./routes/supplier.js"); 

const app = express()

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.use(bodyParser.json());

app.use(express.json())
app.use(cors())
// app.use(cors({ origin: "http://localhost:5000", credentials: true }));

app.use('/api/suppliers', supplierRoutes);
app.use('/api/customers', customerRoutes);
 
app.use('/api/stock_categories', stockCategoryRoutes); 
app.use('/api/categories', categoryRoutes); 
app.use('/api/products', productRoutes);
app.use('/auth',authRoutes)


const Supplier = require("./models/Supplier.js");
const Customer = require("./models/Customer.js");
const Product = require("./models/Products.js");
// const Sale = require("./models/Sale.js");
const Category = require('./models/Category.js');
const StockCategory = require('./models/StockCategory.js');


const CONNECTION_URL = process.env.MONGODB_URI
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>console.log(`Server Started Successfully on Port : ${PORT}`)))
.catch((error)=> {console.error(`Something went wrong : ${error}`)
})










