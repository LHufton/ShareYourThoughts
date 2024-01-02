import mongoose from 'mongoose'
const { Schema } = mongoose

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true }
  },
  { timestamps: true }
)

const User = require('../schemas/User')
module.exports = User
