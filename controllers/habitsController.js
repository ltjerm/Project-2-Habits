const express = require('express')
const Habit = require('../models/habits-model')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})


router.get('/new', (req, res) => {
  res.render('new')
})

router.get('/habits', (req, res) => {
  Habit
  .find({}).then((habits) => res.render('habits', {display: habits}))
})

router.post('/add', (req, res) => {
  console.log(req)
  Habit.create(req.body).then((habits) => res.redirect('/habits'))
  .catch(console.error)
})

router.delete('/:id', (req, res) => {
  Habit.findByIdAndRemove({_id: req.params.id}).then((habits) => res.redirect('/'))
})

router.put('/:id', (req, res) => {
  Habit.findOneAndUpdate({_id: req.params.id}, req.body)
  .then(habits => res.redirect('/'))
  .catch(console.error)
})




module.exports = router