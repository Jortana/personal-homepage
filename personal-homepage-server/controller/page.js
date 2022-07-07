const { Page } = require('../models')

exports.pages = async (req, res, next) => {
  try {
    res.send('get pages')
  } catch (err) {
    next(err)
  }
}

exports.createPage = async (req, res, next) => {
  try {
    res.send('create page')
  } catch (err) {
    next(err)
  }
}
