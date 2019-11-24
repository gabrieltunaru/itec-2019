const { Item } = require('../models/item')
const generalMid = require('./general')
const fs = require('fs')
const ObjectId = require('mongoose').Types.ObjectId; 
const { Category } = require('../models/category')

const setItem = async (req, res) => {
  try {
    const item = new Item({ ...req.body })
    await item.save()
    res.send(201)
  } catch (err) {
    res.status(400).send(err)
  }
}

const getOwnerItems = async (req, res) => {
  try {
    const id = req.params.id
    res.json(await Item.find({owner: id}))
  } catch(err) {
      res.status(400).send(err.message)
  }
}

const getItemsByCategory = async (req,res) => {
  try {
    const id = req.params.id
    const category = await Category.findById(id).exec()
    const categories =[category._id,...category.childrens]
    console.log(categories)
    res.json(await Item.find({category: {$in: categories}}))
  } catch(err) {
      res.status(400).send(err.message)
  }
}

module.exports = { setItem ,getOwnerItems, getItemsByCategory}
