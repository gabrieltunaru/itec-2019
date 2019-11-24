const mongoose = require('mongoose')

const CategotySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    parentId: {
      type: String,
    },
    childrens: {
        type: [mongoose.Schema.ObjectId],
        ref: 'CategotySchema'
    },
})

const Category = mongoose.model('Category', CategotySchema)
exports.Category = Category
