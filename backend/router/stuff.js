const express = require('express')
const Router = express.Router()
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')
const stuffCtrl = require('../controllers/stuff')

Router.get('/', auth, stuffCtrl.getAllThings);

Router.post('/', auth, multer, stuffCtrl.createThing);

Router.get('/:id', auth,stuffCtrl.getOneThing);

Router.put('/:id', auth, multer, stuffCtrl.modifyThing);

Router.delete('/:id', auth,stuffCtrl.deleteThing);

module.exports = Router