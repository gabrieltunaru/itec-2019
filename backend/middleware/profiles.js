const { BuyerProfile } = require('../models/buyerProfile')
const userModel = require('../models/user.model')
const generalMid = require('./general')
const { SellersToVerify } = require('../models/sellersToVerify')
const fs = require('fs')

const setProfile = type => async (req, res) => {
  const profile = new BuyerProfile({ ...req.body })
  const decoded = generalMid.decoded(req.headers)
  checkVerifiedSeller(decoded)
  const modelName = `${type}Profile`
  await userModel.User.update({ _id: decoded._id }, { [modelName]: profile })
  userModel.User.findOne({ email: decoded.email }).exec((err, result) => {
    res.send({ status: `Created profile ${result[modelName]}` })
    return
  })
}

const setBuyerProfile = setProfile('buyer')
const setSellerProfile = setProfile('seller')

async function checkVerifiedSeller(user) {
  if (!user.isSeller) {
    const exists = await SellersToVerify.findOne({ email: user.email })
    const isOnList = await SellersToVerify.findOne({ sellerId: user._id })
    if (isOnList || exists) {
      return
    }
    const sellerToVerify = new SellersToVerify({ sellerId: user._id })
    await sellerToVerify.save()
  }
}

const getProfile = type => async (req, res) => {
  const modelName = `${type}Profile`
  const decoded = generalMid.decoded(req.headers)
  userModel.User.findOne({ _id: decoded._id }).exec((err, result) => {
    res.send(result[modelName])
    return
  })
}

const getBuyerProfile = getProfile('buyer')
const getSellerProfile = getProfile('seller')

const uploadPhoto = type => async (req, res, next) => {
  try {
    const modelName = `${type}Profile.photo`
    const file = req.file
    if (!file) {
      res.status(400).send("Didn't receive a file")
    }
    const decoded = generalMid.decoded(req.headers)
    await userModel.User.update(
      { _id: decoded._id },
      { [modelName]: file.filename }
    )
    res.send(file)
  } catch (err) {
    res.status(400).send(err)
  }
}

const uploadBuyerPhoto = uploadPhoto('buyer')
const uploadSellerPhoto = uploadPhoto('seller')

const getImage = async (req, res) => {
  const { filename } = req.params
  fs.readFile(generalMid.getFile(filename), function(err, data) {
    if (err) throw err
    res.send(data)
  })
}

module.exports = {
  setProfile,
  getImage,
  setBuyerProfile,
  getBuyerProfile,
  uploadBuyerPhoto,
  setSellerProfile,
  getSellerProfile,
  uploadSellerPhoto,
}
