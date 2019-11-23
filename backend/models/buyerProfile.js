const mongoose = require('mongoose')

const BuyerProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  billingAddress: {
    type: String,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  type: {
    type: String
  }
})

const BuyerProfile = mongoose.model('BuyerProfile', BuyerProfileSchema)
exports.BuyerProfile = BuyerProfile
exports.BuyerProfileSchema = BuyerProfileSchema
