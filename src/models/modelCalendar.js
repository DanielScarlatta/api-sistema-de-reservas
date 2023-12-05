const mongoose = require('mongoose')

const Calender = mongoose.model('Calender', {
  email: String,
  nameEvent: String,
  timeInit: String,
  timeEnd: String,
})

module.exports = Calender