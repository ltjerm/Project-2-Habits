const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://test:test@cluster0.m9kgz.mongodb.net/test-habits?retryWrites=true&w=majority&ssl=true"
// process.env.NODE_ENV === "production"
// ? //if so, use DB_URL as the database location
//   process.env.DB_URL
// : //if not, use the book-e db on the MongoDB's local server
//   "mongodb://localhost/mcdonalds";

mongoose.connect(mongoURI)
.then((instance) => console.log(`Connected to db: ${instance.connections[0].name}`) )
.catch((error) => console.log('Connection failed!', error))  

module.exports = mongoose