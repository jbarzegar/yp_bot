const express = require('express')
const router = express.Router()

// Non router deps
const passport = require('passport')
const config = require('../../conf/')

router.get('/login',
  passport.authenticate('discord',
  { scope: config.DISCORD_OAUTH_CONF.scope }))

router.get('/callback',
    passport.authenticate('discord'),
    (req, res) => {
      return res.redirect(`${config.CLIENT_URL}?code=${req.user}`)
    }
)

module.exports = router
