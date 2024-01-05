const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const cors = require('cors')

require('dotenv').config()
require('./config/database')
require('./config/passport')

const AuthRouter = require('./routes/Auth')
const IndexRouter = require('./routes/Index')
const CommentRouter = require('./routes/Comment')
const PostRouter = require('./routes/Post')
const FeedRouter = require('./routes/Feed')

const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
)
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(passport.initialize())
app.use(passport.session())

const callbackURL =
  process.env.NODE_ENV === 'production'
    ? 'https://syt-final-app-8a5cf6789a1a.herokuapp.com/auth/google/callback'
    : 'http://localhost:5173/auth/google'

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: callbackURL
    },
    function (accessToken, refreshToken, profile, cb) {
      // Handle user profile
    }
  )
)
app.use('/', IndexRouter)
app.use('/auth', AuthRouter)
app.use('/comments', CommentRouter)
app.use('/posts', PostRouter)
app.use('/feed', FeedRouter)

// The "catchall" handler: for any request that doesn't match the above, send back React's index.html file.
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
