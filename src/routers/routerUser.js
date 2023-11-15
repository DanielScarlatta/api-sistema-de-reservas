const express = require('express');
const router = express.Router();

const userController = require('@controllers/userController.js')

router.get('/v1/hello', userController.userHello)
router.post('/v1/auth/register', userController.registerUser)
router.post('/v1/auth/login', userController.loginUser)

module.exports = router;