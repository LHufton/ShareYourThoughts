// var express = require('express')
var router = require('express').Router()
const passport = require('passport')

// This app has no "home" page, but your projects should 😀
router.get('/', function (req, res, next) {
  res.redirect('/home')
})

router.get(
  '/auth/google',
  passport.authenticate(
    // which passport strategy is being used?
    'google',
    {
      scope: ['profile', 'email'],
      // optional
      prompt: 'select account'
    }
  )
)

router.get(
  '/auth/google',
  passport.authenticate('google', {
    successRedirect: '/home',
    failureRedirect: '/signin'
  })
)

router.get('/logout', function (req, res) {
  req.logout(function () {
    // change path for your "landing" page
    res.redirect('/home')
  })
})
module.exports = router
