const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer",
        required:true,
    },
orderDate:{
    type:Date,
    required:true,
},
products:[
    {
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Stock",
            required:true,
        },
        quantity: {
            type: Number,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
      subtotal: {
        type: Number,
        required: true,
      },
      prev_due: {
        type: Number,
        default: 0,
      },
      netTotal: {
        type: Number,
        required: true,
      },
      paidBill: {
        type: Number,
        required: true,
      },
      dueBill: {
        type: Number,
        required: true,
      },
      paymentMethod: {
        type: String,
        required: true,
      },
    });
    
    module.exports = mongoose.model("Sale", saleSchema);

