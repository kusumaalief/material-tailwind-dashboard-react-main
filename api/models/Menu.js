const mongoose = require('mongoose');

const Schema = mongoose.Schema

const Menu = new Schema(
   {
      name: {type: String, require: true},
      price: {type: Number, require: true},
      category: {type: String, require: true},
      img: {type: String, require: true},
   }, {timestamps: true}
)

module.exports = mongoose.model('Menu',Menu)