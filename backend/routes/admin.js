const express = require('express')
const {deleteAllPost,makingBanner,makingEditorChoice,removingBanner,removingEditorChoice} = require('../controllers/admin')
const router = express.Router()

router.route('/makingbanner').put(makingBanner)
router.route('/makingEditorChoice').put(makingEditorChoice)
router.route('/removingbanner').put(removingBanner)
router.route('/removingEditorChoice').put(removingEditorChoice)
router.route('/deletingallpost').delete(deleteAllPost)

module.exports= router