const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require('passport')
const User = require('../models/User')

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.PORT
        ? 'https://syt-final-app-8a5cf6789a1a.herokuapp.com/oauth2callback'
        : 'http://localhost:3001/oauth2callback'
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        const user = await User.findOrCreate(
          { googleId: profile.id },
          (err, user) => {
            return cb(err, user)
          }
        )
        return cb(null, user)
      } catch (error) {
        return cb(error, null)
      }
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})
