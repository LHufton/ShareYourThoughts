const mongoose = require('mongoose')
const userSchema = require('./user')
const postSchema = require('./post')
const CommentSchema = require('./Comment')

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)

module.exports = {
  User,
  Post
}
