const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

const Habit = require('../models/habit-model.js')

router.get('/', function (req, res) {
  Habit.find()
    .then(habits => res.json(habits))
    .catch(console.error)
  
})

router.post('/add', function (req, res) {
  Habit
  .create(req.body).then(habits => res.json(habits))
  .catch(console.error)
})

router.delete('/:id', function (req, res) {

})

module.exports = router