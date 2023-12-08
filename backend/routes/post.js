const express = require('express')
const {getPost,uploadPost} = require('../controllers/post')
const router = express.Router(); 

router.route('/get').get(getPost)
router.route('/post').post(uploadPost)


module.exports = router