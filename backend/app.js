const express = require('express')

const bodyParser = require('body-parser')

const app = express();

const path = require('path');

const stuffRouter = require('./router/stuff')

const userRouter = require('./router/user')

app.use(express.json())

const mongoose = require('mongoose');

mongoose.connect('mongodb://atlas-sql-65c3b16a5b39902a027e508d-2mqrs.a.query.mongodb.net/GoThings?ssl=true&authSource=admin')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use('/api/stuff', stuffRouter);
  app.use('/api/user', userRouter);
  app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(bodyParser.json())

module.exports = app;