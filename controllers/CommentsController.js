const Comment = require('../models/Comment')

export const GetComments = async (req, res) => {
  const comments = await Comment.find({})
  res.send(comments)
}

export const CreateComment = async (req, res) => {
  const comment = await Comment.create({ ...req.body })
  res.send(comment)
}

export const UpdateComment = async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(
    req.params.comment_id,
    req.body,
    { new: true }
  )
  res.send(comment)
}

export const DeleteComment = async (req, res) => {
  await Comment.deleteOne({ _id: req.params.comment_id })
  res.send({
    msg: 'Comment Deleted',
    payload: req.params.comment_id,
    status: 'Ok'
  })
}
