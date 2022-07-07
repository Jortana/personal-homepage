const mongoose = require('mongoose')

const pageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

module.exports = pageSchema
