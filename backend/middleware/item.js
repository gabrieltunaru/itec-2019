const { Item } = require('../models/item')
const generalMid = require('./general')
const fs = require('fs')

const setItem = async (req, res) => {
  try {
    const item = new Item({ ...req.body })
    await item.save()
    res.send(201)
  } catch (err) {
    res.status(400).send(err)
  }
}


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


module.exports = {setItem}
