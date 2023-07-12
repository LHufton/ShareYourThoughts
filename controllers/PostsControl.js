const Post = require('../models/post')

const index = async (req, res) => {
  console.log(req.query)
  res.render('posts/index', {
    posts: await Post.find()
  })
}

const show = async (req, res) => {
  const post = await Post.findById(req.params.id)
  res.render('posts/show', { post })
}

const newPost = async (req, res) => {
  res.render('posts/new', { title: 'New Post', errorMsg: '' })
}

const create = async (req, res) => {
  try {
    const post = await Post.create(req.body)
    res.redirect('/posts')
  } catch (error) {
    res.render('posts/new', { errorMsg: error.message })
  }
}

const deletePost = async (req, res) => {
  try {
    await Post.findOneAndDelete({ _id: req.params.id })
    res.redirect('/posts')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  index,
  show,
  new: newPost,
  create,
  delete: deletePost
}
