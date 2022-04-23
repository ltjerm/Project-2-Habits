const express = require('express')
const Habit = require('../models/habits-model')
const router = express.Router()

// router.get('/', (req, res) => {
//   Habit
//   .find({}).then((habits) => res.render('habits'))
// })

router.get('/', async (req, res, next) => {
  try {
      const habits = await Habit.find({});
      const context = { habits }
      console.log(context);
      return res.render('index.ejs', context);
  } catch (error) {
      console.log(error);
      req.error = error;
      return next();
  }
});

router.post('/add', (req, res) => {
  Habit.create(req.body).then((habits) => res.send(habits))
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