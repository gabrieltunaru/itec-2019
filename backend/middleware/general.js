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
    const bitmap = fs.readFileSync(__dirname + '/../assets/images/' + filename)
    return new Buffer(bitmap).toString('base64')
  },
}
