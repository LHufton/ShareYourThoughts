const mongoose = require('mongoose')
const { Schema } = mongoose

const commentSchema = new Schema(
  {
    title: { type: String, required: false },
    content: { type: String }
  },
  { timestamps: true }
)

module.exports = commentSchema
