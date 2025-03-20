const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv= require('dotenv')
const bodyParser = require("body-parser");
// require('dotenv').config();

dotenv.config();


const authRoutes = require('./routes/auth.js')

const app = express()



app.use(bodyParser.json());

app.use(express.json())
app.use(cors())
// app.use(cors({ origin: "http://localhost:5000", credentials: true }));


app.use('/auth',authRoutes)


const Customer = require("./models/Customer");
const Product = require("./models/Product");
const Sale = require("./models/Sale");
const Category = require('./models/Category');


const CONNECTION_URL = process.env.MONGODB_URI
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>console.log(`Server Started Successfully on Port : ${PORT}`)))
.catch((error)=> {console.error(`Something went wrong : ${error}`)
})










