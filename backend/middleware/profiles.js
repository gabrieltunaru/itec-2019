const { BuyerProfile } = require('../models/buyerProfile')
const userModel = require('../models/user.model')
const generalMid = require('./general')
const fs = require('fs')

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
    try {
      const file = req.file
      if (!file) {
        res.status(400).send("Didn't receive a file")
      }
      const decoded = generalMid.decoded(req.headers)
      await userModel.User.update(
        { _id: decoded._id },
        { 'buyerProfile.photo': file.filename }
      )
      res.send(file)
    } catch (err) {
      res.status(400).send(err)
    }
  },

  getPhoto: async (req, res) => {
    const { filename } = req.params
    res.send(generalMid.getFile(filename))
  },

  getImage: async (req, res) => {
    const { filename } = req.params
    fs.readFile(generalMid.getFile(filename), function(err, data) {
      if (err) throw err
      res.send(data)
    })
  },
}
