const express = require('express')
const {userSignup,userLogin} = require('../controllers/signup')
const router = express.Router()

router.route('/upload').post(userSignup)
router.route('/login').post(userLogin)
module.exports = router