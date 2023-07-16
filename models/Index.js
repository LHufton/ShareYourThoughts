const mongoose = require('mongoose')
const userSchema = require('./user')
const postSchema = require('./post')
const commentSchema = require('./comment')
const feedSchema = require('./feed')

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)
const Comment = mongoose.model('Comment', commentSchema)
const Feed = mongoose.model('Feed', feedSchema)

module.exports = {
  User,
  Post,
  Comment,
  Feed
}
