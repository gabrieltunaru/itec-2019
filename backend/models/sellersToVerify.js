const mongoose = require('mongoose')

const SellersToVerifySchema = new mongoose.Schema({
  sellerId: {
    type: String,
    required: true,
  },
})

const SellersToVerify = mongoose.model('SellersToVerify', SellersToVerifySchema)
exports.SellersToVerify = SellersToVerify
