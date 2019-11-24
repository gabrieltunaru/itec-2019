const jwt = require('jsonwebtoken')
const config = require('config')
const generalMid = require('./general')
const { Category } = require('../models/category')

const addOne = async (req, res) => {
  try {
    const category = req.body
    const model = new Category(category)
    const childId = await model.save()
    if (category.parentId) {
      await addChildren(category.parentId, model._id)
    }
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(400).json(err)
  }
}

const getAll = async (req, res) => {
  res.send(
    await Category.find({
      parentId: { $exists: false },
    }).populate('childrens')
  )
}

const getSubcategories = async (req, res) => {
    res.send(
      await Category.find({
        parentId: { $exists: true },
      }).populate('childrens')
    )
  }

async function addChildren(parentId, childId) {
  const parent = await Category.findById(parentId).exec()
  await parent.update({
    children: parent.childrens.push(childId),
  })
  await parent.save()
  if (parent.parentId) {
    await addChildren(parent.parentId, childId)
  }
}

module.exports = { addOne, getAll, getSubcategories }
