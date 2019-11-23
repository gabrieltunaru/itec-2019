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

  getBuyerProfile: async (req, res) => {
    const decoded = generalMid.decoded(req.headers)
    userModel.User.findOne({ _id: decoded._id }).exec((err, result) => {
      res.send(result.buyerProfile)
      return
    })
  },

  uploadBuyerPhoto: async (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    const decoded = generalMid.decoded(req.headers)
    console.log(decoded)
    await userModel.User.update(
      { _id: decoded._id },
      { 'buyerProfile.photo': file.filename }
    )
    res.send(file)
  },

  getPhoto: async (req,res) => {
    //   const decoded = generalMid.decoded(req.headers)
    //   const user = await userModel.User.findOne({ _id: decoded._id })
    //     res.send(user)
    const {filename} = req.params
    res.send(generalMid.getFile(filename))
    }
}
