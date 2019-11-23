const jwt = require('jsonwebtoken')
const config = require('config')
const fs = require('fs')

module.exports = {
  decoded: headers => {
    const token = headers['x-auth-token']
    const decoded = jwt.verify(token, config.get('privateKey'))
    return decoded
  },

  getFile(filename) {
    return __dirname + '/../assets/images/' + filename

  },
}
