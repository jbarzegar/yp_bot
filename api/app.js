/* Node Deps */
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const Strategy = require('passport-discord').Strategy
const app = express()
/* Local Deps */
const config = require('./conf/')
const router = require('./router/')

passport.serializeUser(function(user, done) {
  done(null, user)
})
passport.deserializeUser(function(obj, done) {
  done(null, obj)
})
passport.use(new Strategy(config.DISCORD_OAUTH_CONF,
  (accessToken, refreshToken, profile, done) => {
    // Return access token
    process.nextTick(() => done(null, accessToken))
  }))

app.use(session(config.SESSION_CONFIG))
app.use(passport.initialize())
app.use(passport.session())

// Router
app.use('*', router)

module.exports = app
