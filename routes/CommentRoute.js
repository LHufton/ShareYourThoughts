const express = require('express')
const router = express.Router()

const commentsCtrl = require('../controllers/CommentsControl')

router.get('/', commentsCtrl.index)
router.get('/new', commentsCtrl.new)
router.get('/:id', commentsCtrl.show)
router.post('/', commentsCtrl.create)
router.delete('/:id', commentsCtrl.deleteComment)

module.exports = router
