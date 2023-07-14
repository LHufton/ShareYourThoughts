const mongoose = require('mongoose')
const feedSchema = require('./Feed')

const feedSchema = new Schema(
  {
    content: { type: String, required: true },
    type: { type: String, enum: ['post', 'comment'], required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    parent: { type: Schema.Types.ObjectId, ref: 'Feed' },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
)

const Feed = model('Feed', feedSchema)

module.exports = feedSchema
