const mongoose = require('mongoose')

var CategorySchema = new mongoose.Schema(
  {
    name: String,
    describe:String
  },
  {
    versionKey: false 
  }
)
//Note: tham số cuối cùng bắt buộc phải là tên của collection (table) trong DB
var CategoryModel = mongoose.model('category', CategorySchema, 'category');
module.exports = CategoryModel