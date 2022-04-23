const Habit = require('../models/habits-model')
require('./connection')
const seedData = require('./habits.json')

console.log(seedData)

async function seeding () {
  try {
      console.log(seedData)
      await Habit.deleteMany({})
      await Habit.insertMany(seedData);
  } catch (error) {
      console.log(error);
      // req.error = error;
      // return n();
  }
};
seeding()
// Habit.deleteMany({})
// .then(() => {
//     console.log(seedData)
//     return  Habit.insertMany(seedData)
// })
// .then(() =>  console.log('Seeded my data'))
// .catch((error) => console.log(error))