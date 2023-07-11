const Comment = require('../models/comment')

const index = async (req, res) => {
  console.log(req.query)
  res.render('comments/index', {
    comments: await Comment.find()
  })
}

const show = async (req, res) => {
  const comment = await Comment.findById(req.params.id)
  res.render('comments/show', {})
}

const newComment = async (req, res) => {
  res.render('comments/new', { title: 'New Comment', errorMsg: '' })
}

const create = async (req, res) => {
  try {
    const comment = await Comment.create(req.body)
    res.redirect('/comments')
  } catch (error) {
    res.render('comments/new', { errorMsg: err.message })
  }
}

const deleteComment = async (req, res) => {
  try {
    await Comment.findOneAndDelete({ _id: req.params.id })
    res.redirect('/comments')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  index,
  show,
  new: newComment,
  create,
  delete: deleteComment
}
