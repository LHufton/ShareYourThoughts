const router = require('express').Router()
const controller = require('../controllers/PostsController')

router.get('/', controller.index)
router.get('/new', controller.new)
router.get('/:id', controller.show)
router.post('/', controller.create)
router.delete('/:id', controller.deletePost)

module.exports = router
