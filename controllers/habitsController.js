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

router.get('/edit', (req, res) => {
  Habit
  .find({}).then((habits) => res.render('edit', {display: habits}))
})

router.get('/delete', (req, res) => {
  Habit
  .find({}).then((habits) => res.render('delete', {display: habits}))
})

router.get('/:id', (req, res) => {
  Habit.findByIdAndUpdate(req.params.id)
  .then(habits => {
      res.render('edit', habits)
  })
  .catch(console.error)
})

router.put('/:id', (req, res) => {
  Habit.findOneAndUpdate({ _id: req.params.id}, req.body).then(habits => res.redirect('/edit'))
  .catch(console.error)
})

router.post('/add', (req, res) => {
  console.log(req)
  Habit.create(req.body).then((habits) => res.redirect('/habits'))
  .catch(console.error)
})

router.delete('/:id', (req, res) => {
  Habit.findByIdAndRemove({ _id: req.params.id}).then(habits => res.redirect('/habits'))
  .catch(console.error)
})




// router.put('/:id', (req, res) => {
//   Habit.findOneAndUpdate({_id: req.params.id}, req.body)
//   .then(habits => res.redirect('edit'))
//   .catch(console.error)
// })







module.exports = router