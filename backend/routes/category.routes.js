const auth = require('../middleware/auth')
const express = require('express')
const categoryMid = require('../middleware/categories')
const router = express.Router()

router.post('/',  categoryMid.addOne)
router.get('/',  categoryMid.getAll)

module.exports = router
