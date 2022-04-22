const express = require ('express')

const app = express()
const habitController = require ('../server/controllers/habitController.js')
const port = 4000

// app.get('/', function(req, res) {
//     res.send('Hello world')
// })

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', habitController)

app.listen(port, () => {
    console.log(`App is listeing on port ${port}`)
})