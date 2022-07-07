const { User } = require('../models')

const jwt = require('../utils/jwt')
const { jwtSecret } = require('../config/config.default')

exports.login = async (req, res, next) => {
  try {
    const user = req.user.toJSON()
    const token = await jwt.sign(
      {
        userId: user._id
      },
      jwtSecret,
      { expiresIn: 60 * 60 }
    )

    delete user.password
    res.status(200).json({
      code: 200,
      data: {
        ...user,
        token,
        expireTime: new Date().getTime() + 60 * 60 * 1000
      }
    })
  } catch (err) {
    next(err)
  }
}
