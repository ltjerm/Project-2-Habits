const mongoose = require('../db/connection');

const habitSchema = new mongoose.Schema({
  title: {type: String, required: true},
  days: {type: String, required: true},
  time: {type: String, required: true},
  

},
{timestamps: true}
)

const Habit = mongoose.model('Habit', habitSchema)

module.exports = Habit