const express = require('express')
const {getPost,addPost} = require('../controllers/post')
const router = express.Router(); 

router.route('/fetch').get(getPost)
router.route('/set').post(addPost)


module.exports = router