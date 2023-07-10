const { Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String }
  },
  { timestamps: true }
)

module.exports = commentSchema
