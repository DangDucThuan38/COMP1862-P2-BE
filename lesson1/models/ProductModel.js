const mongoose = require('mongoose')

var ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    image: String,
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
   
  },
  {
    versionKey: false 
  }
)

var ProductModel = mongoose.model('product', ProductSchema, 'product');
module.exports = ProductModel