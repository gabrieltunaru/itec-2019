const { User, validate } = require('../models/user.model')
const bcrypt = require('bcrypt')

module.exports = {
  register: async (req, res) => {
    try {
      const { error } = validate(req.body)
      if (error) return res.status(400).send(error.details[0].message)

      let user = await User.findOne({ email: req.body.email })
      if (user) {
        res.status(400).send('User already registered.')
        return
      }
      user = new User({
        password: req.body.password,
        email: req.body.email,
      })
      user.password = await bcrypt.hash(user.password, 10)
      await user.save()

      const token = user.generateAuthToken()
      res.header('x-auth-token', token).send({
        _id: user._id,
        email: user.email,
      })
    } catch (err) {
      console.error(err)
      res.status(500).send(err)
    }
  },

  login: async (req, res) => {
    let reqUser = req.body
    let dbUser = await User.findOne({ email: req.body.email })
    console.log(dbUser)
    if(!dbUser) {
        res.status(400).send("User does not exist")
        return
    }
    bcrypt
      .compare(reqUser.password, dbUser.password)
      .then(equal => {
        if (equal) {
          const user = dbUser
          const token = user.generateAuthToken()
          res.header('x-auth-token', token).send({
            _id: user._id,
            email: user.email,
          })
        } else {
          res.status(400).send('Wrong password')
        }
      })
      .catch(err => {
        console.error(err)
        res.status(500).send(err)
      })
  },

  getCurrent: async (req, res) => {
    const user = await User.findById(req.user._id).select('-password')
    res.send(user)
  },
}
