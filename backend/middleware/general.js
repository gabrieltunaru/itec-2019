
const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = {
    decoded: (headers) => {
    const token = headers['x-auth-token']
    const decoded = jwt.verify(token, config.get('privateKey'))
    return decoded
    }
}

