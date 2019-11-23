const auth = require('../middleware/auth')
const { User, validate } = require('../models/user.model')
const express = require('express')
const profileMiddleware = require('../middleware/profiles')
const router = express.Router()
const upload = require('../middleware/upload')

router.post('/', auth, profileMiddleware.setBuyerProfile)
router.get('/', auth, profileMiddleware.getBuyerProfile)
router.post('/buyerPhoto', [auth, upload], profileMiddleware.uploadBuyerPhoto)
router.get('/buyerPhoto/:filename',auth,profileMiddleware.getPhoto)
module.exports = router
