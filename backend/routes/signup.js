const express = require('express')
const {userSignup,userLogin,userLogout} = require('../controllers/signup')
const upload  = require('../middleware/multerSetup')

const router = express.Router()

router.route('/upload').post(upload.single("profilePic"),userSignup)
router.route('/login').post(userLogin)
router.route('/logout').post(userLogout)
module.exports = router