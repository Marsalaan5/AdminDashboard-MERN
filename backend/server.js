const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv= require('dotenv')

dotenv.config();

const app = express()


app.use(express.json())
app.use(cors())


const CONNECTION_URL = process.env.MONGODB_URI
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>console.log(`Server Started Successfully on Port : ${PORT}`)))
.catch((error)=> {console.error(`Something went wrong : ${error}`)
})

