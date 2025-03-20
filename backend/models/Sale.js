const mongoose = require("mongoose");

const sakeSchema = new mongoose.Schema({
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
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
            required:"true",
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

