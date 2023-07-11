const express = require('express')
const router = express.Router()

const postsCtrl = require('../controllers/PostsControl')

router.get('/', postsCtrl.index)
router.get('/new', postsCtrl.new)
router.get('/:id', postsCtrl.show)
router.post('/', postsCtrl.create)
router.delete('/:id', postsCtrl.deletePost)

module.exports = router
