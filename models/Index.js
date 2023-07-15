const mongoose = require('mongoose')
const userSchema = require('./user')
const postSchema = require('./post')
const commentSchema = require('./comment')

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)
const Comment = mongoose.model('Comment', commentSchema)

module.exports = {
  User,
  Post,
  Comment
}
