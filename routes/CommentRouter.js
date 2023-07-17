const router = require('express').Router()
const controller = require('../controllers/CommentsController')
const middleware = require('../middleware')

router.get('/', controller.GetComments)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateComment
)
router.put(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateComment
)
router.delete(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteComment
)

module.exports = router
