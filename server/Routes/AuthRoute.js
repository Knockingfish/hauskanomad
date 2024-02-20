const express = require('express');
const router = express.Router();

const { Signup, Login, } = require('../Controllers/authController.js');
const { userVerification } = require('../Middlewares/AuthMiddleware.js')

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/verify', userVerification);

module.exports = router;
