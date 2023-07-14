const mongoose = require('mongoose')
const { Schema } = mongoose.Schema

const commentSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String }
  },
  { timestamps: true }
)

module.exports = commentSchema
