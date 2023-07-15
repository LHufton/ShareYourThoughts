const { Schema } = require('mongoose')

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String },
    isPublic: { type: Boolean, default: true }
  },
  { timestamps: true }
)

module.exports = postSchema
