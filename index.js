const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const main_ctrl = require('./controllers/main_ctrl.js')

app.get('/name', main_ctrl.getName)
.get('/location', main_ctrl.getLocation)
.get('/occupations', main_ctrl.getOccupations)
.get('/occupations/latest', main_ctrl.getLatestOccupation)
.get('/hobbies', main_ctrl.getHobbies)
.get('/hobbies/:type', main_ctrl.getHobbiesByType)
.get('/family', main_ctrl.getFamily)
.get('/family/:gender', main_ctrl.getFamilyByGender)
.get('/restaurants', main_ctrl.getRestaurants)
.get('/restaurants/:name', main_ctrl.getRestaurantsByName)

.post('/name', main_ctrl.putName)
.post('/location', main_ctrl.putLocation)
.post('/hobbies', main_ctrl.putHobby)
.post('/occupations', main_ctrl.putOccupation)
.post('/family', main_ctrl.putFamily)
.post('/restaurant', main_ctrl.putRestaurant)

.get('/skills', main_ctrl.getSkills)
.post('/skills', main_ctrl.putSkills)
app.listen(3000, ()=>{
  console.log('Listening on port 3000')
})
