const mongoose = require('mongoose')

const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String,
  recoveryCode: String,
  expirationTime: String
})

module.exports = User