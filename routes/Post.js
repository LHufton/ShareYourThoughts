const router = require('express').Router()
const controller = require('../controllers/PostsController')
const middleware = require('../middleware')

// Log to check if the router file is loaded
console.log('Posts router loaded')

router.get('/', (req, res) => {
  console.log('GET request to /posts') // Log when a GET request is made
  controller.GetPosts(req, res)
})

router.post('/', middleware.stripToken, middleware.verifyToken, (req, res) => {
  console.log('POST request to /posts') // Log when a POST request is made
  console.log('Request body:', req.body) // Log the request body to see the data being sent
  controller.CreatePost(req, res)
})

router.put(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  (req, res) => {
    console.log(`PUT request to /posts/${req.params.post_id}`) // Log the specific post being updated
    console.log('Request body:', req.body) // Log the request body to see the data being updated
    controller.UpdatePost(req, res)
  }
)

router.delete(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  (req, res) => {
    console.log(`DELETE request to /posts/${req.params.post_id}`) // Log the specific post being deleted
    controller.DeletePost(req, res)
  }
)

module.exports = router
