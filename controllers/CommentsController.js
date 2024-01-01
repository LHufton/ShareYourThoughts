const { Comment } = require('../models/User')

const GetComments = async (req, res) => {
  const comments = await Comment.find({})
  res.send(comments)
}

const CreateComment = async (req, res) => {
  const comment = await Comment.create({ ...req.body })
  res.send(comment)
}

const UpdateComment = async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(
    req.params.comment_id,
    req.body,
    { new: true }
  )
  res.send(comment)
}

const DeleteComment = async (req, res) => {
  await Comment.deleteOne({ _id: req.params.comment_id })
  res.send({
    msg: 'Comment Deleted',
    payload: req.params.comment_id,
    status: 'Ok'
  })
}

module.exports = {
  GetComments,
  CreateComment,
  UpdateComment,
  DeleteComment
}
