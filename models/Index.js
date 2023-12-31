const mongoose = require('mongoose')
const User = require('./User')
const Post = require('./Post')
const Comment = require('./Comment')
const Feed = require('./Feed')

module.exports = {
  User,
  Post,
  Comment,
  Feed
}
