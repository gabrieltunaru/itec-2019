const mongoose = require('mongoose')

const CategotySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    parentId: {
      type: String,
    },
    ancestors: {
        type: [String]
    },
    ancestorsIds: {
        type: [String]
    },
    childrens: [String]
})

const Category = mongoose.model('Category', CategotySchema)
exports.Category = Category
