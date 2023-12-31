const mongoose = require('mongoose')
const { Schema } = mongoose

const commentSchema = new Schema(
  {
    title: { type: String, required: false },
    content: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: false }
  },
  { timestamps: true }
)

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
