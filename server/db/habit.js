const Habit = require('/Users/jeremyhernandez/Desktop/GeneralAssembly/projects/project2-habits/server/models/habit-model.js')

const seedData = require('/Users/jeremyhernandez/Desktop/GeneralAssembly/projects/project2-habits/server/db/habit.json')

console.log(seedData)

Habit.deleteMany({})
.then(() => {
    return  Habits.insertMany(seedData)
})
.then(console.log)
.catch(console.error)

