const auth = require('../middleware/auth')
const { User, validate } = require('../models/user.model')
const express = require('express')
const profileMiddleware = require('../middleware/profiles')
const router = express.Router()

router.post('/', auth, profileMiddleware.setBuyerProfile)
router.get('/', auth, profileMiddleware.getBuyerProfile)

module.exports = router
