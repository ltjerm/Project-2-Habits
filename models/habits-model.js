const mongoose = require('mongoose');
require('../db/connection')
const habitSchema = new mongoose.Schema({
  title: {type: String},
  days: {type: String},
  hour: {type: String},
})

const Habit = mongoose.model('Habits', habitSchema)

module.exports = Habit