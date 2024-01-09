const express = require('express');
const mongoose = require('mongoose')
const usersData = require('./data.js');
const user_routes = require('./routes/users.js');


require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)
.then((result) => {app.listen(5000);})
.catch((err) => console.log(err))

const app = express();

//Middelware

const logger = (req, res, next) => {
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  next()
}

const auth  = (req, res, next) => {
  const user = req.query.user;
  if (user === 'admin') {
      req.user = {
          id: 1,
          name: 'admin'
      }
      next()
  } else {
      res.status(401).send('Unauthorized')
  }
}



app.use(logger,express.json())
app.use('/api/users', user_routes)

