const express = require('express')

const Router = express.Router()

const userCtrl = require('../controllers/user')

Router.post('/signUp', userCtrl.signUp)

Router.post('/signUp', userCtrl.login)

module.exports= Router