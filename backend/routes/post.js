const express = require('express')
const {getPost,addPost,editPost,deletePost} = require('../controllers/post')
const router = express.Router(); 

router.route('/fetch').get(getPost)
router.route('/set').post(addPost)
router.route('/edit/:id').put(editPost)
router.route('/delete').delete(deletePost)


module.exports = router