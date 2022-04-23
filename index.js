const express = require('express');
const app = express();
const ejs = require('ejs');
const habitController = require('./controllers/habitsController')
app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('port', process.env.PORT || 3000);

app.use("/", habitController)

app.listen(app.get('port'), () => {
  console.log(`App listening on port ${app.get('port')}`);
})