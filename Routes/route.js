const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController');
const orderController = require('../Controllers/orderController');

router.post('/create_user',userController.createUser );
router.get('/getAllUsers',userController.getAllUsers );
router.get('/getUSerById',userController.getUSerById);
router.get('/updateUSerInfo',userController.updateUSerInfo );
router.get('/deleteUserByID',userController.deleteUserByID );


module.exports= router;