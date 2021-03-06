const auth = require('../middleware/auth')
const { User, validate } = require('../models/user.model')
const express = require('express')
const userMiddleware = require('../middleware/user')
const router = express.Router()

router.get('/', auth, userMiddleware.getCurrent)
router.post('/register', userMiddleware.register)
router.post('/login', userMiddleware.login)

module.exports = router
