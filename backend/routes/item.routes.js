const itemMid = require('../middleware/item')
const auth = require('../middleware/auth')
const express = require('express')
const router = express.Router()

router.post('/', auth, itemMid.setItem)

module.exports = router

