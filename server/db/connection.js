const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://ltjerm:jj477912jj@cluster0.m9kgz.mongodb.net/habits-new?retryWrites=true&w=majority'

mongoose.connect(mongoURI)
    .then((instance) => console.log(`Connected to db ${instance.connections[0].name}`))
    .catch(err => console.error('Connection Failed!',err))

    module.exports = mongoose