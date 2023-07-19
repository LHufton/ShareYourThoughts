const { Schema } = require('mongoose')

const postSchema = new Schema(
  {
    title: { type: String, required: false },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: false },
    content: { type: String },
    isPublic: { type: Boolean, default: false },
    comment: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  },
  { timestamps: true }
)

module.exports = postSchema
