const { User } = require('../models')
const middleware = require('../middleware')

const register = async (req, res) => {
  try {
    const { email, password, name } = req.body

    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).send('That email has already been registered!')
    } else {
      const user = await User.create({ name, email, passwordDigest })
      res.send(user)
    }
  } catch (error) {
    throw error
  }
}

module.exports = {
  register
}
