const auth = require('../middleware/auth')
const express = require('express')
const generic = require('../middleware/generic')
const router = express.Router()
const upload = require('../middleware/upload')

router.post('/image', [auth, upload], generic.uploadPhoto)

module.exports = router