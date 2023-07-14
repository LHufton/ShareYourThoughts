const { Schema, model } = require('mongoose')

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String }
  },
  { timestamps: true }
)

const commentSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String }
})

const feedSchema = new Schema(
  {
    content: { type: String, required: true },
    type: { type: String, enum: ['post', 'comment'], required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    parent: { type: Schema.Types.ObjectId, ref: 'Feed' }
  },
  { timestamps: true }
)

const Feed = model('Feed', feedSchema)

module.exports = feedSchema
