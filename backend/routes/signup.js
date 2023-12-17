const express = require('express')
const {userSignup,userLogin} = require('../controllers/signup')
const upload  = require('../middleware/multerSetup')

const router = express.Router()

router.route('/upload').post(upload.single("profilePic"),userSignup)
router.route('/login').post(userLogin)
module.exports = router