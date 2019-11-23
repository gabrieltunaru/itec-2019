const { BuyerProfile } = require('../models/buyerProfile')
const userModel = require('../models/user.model')
const generalMid = require('./general')

module.exports = {
  setBuyerProfile: async (req, res) => {
    const profile = new BuyerProfile({ ...req.body })
    const decoded = generalMid.decoded(req.headers)
    await userModel.User.update({ _id: decoded._id }, { buyerProfile: profile })
    userModel.User.findOne({ email: decoded.email }).exec((err, result) => {
      res.send({ status: `Created profile ${result.buyerProfile}` })
      return
    })
  },

  getBuyerProfile: async (req,res) => {
    const decoded = generalMid.decoded(req.headers)
    userModel.User.findOne({ _id: decoded._id }).exec((err, result) => {
        res.send(result.buyerProfile)
        return
      })
  }
}
