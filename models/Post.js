const { Schema } = require('mongoose')

const postSchema = new Schema(
  {
    title: { type: String, required: false },
    content: { type: String },
    isPublic: { type: Boolean, default: false }
  },
  { timestamps: true }
)

module.exports = postSchema
