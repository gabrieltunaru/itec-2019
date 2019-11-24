const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'UserSchema',
    required: true
},
  name: {
    type: String,
    required: true,
  },
  per: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'CategotySchema',
    required: true
},
  quantity: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
  },
  price: {
    type: Number,
    required: true
  }
})

const Item = mongoose.model('Item', ItemSchema)
exports.Item = Item
exports.ItemSchema = ItemSchema
