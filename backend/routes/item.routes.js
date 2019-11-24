const itemMid = require('../middleware/item')
const auth = require('../middleware/auth')
const express = require('express')
const router = express.Router()

router.get('/ownerId=:id', auth, itemMid.getOwnerItems)
router.get('/category=:id', itemMid.getItemsByCategory)
router.post('/', auth, itemMid.setItem)

module.exports = router
