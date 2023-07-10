const { Schema } = require('mongoose')

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String }
  },
  { timestamps: true }
)

module.exports = postSchema
