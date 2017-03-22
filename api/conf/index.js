const config = {
  DISCORD_OAUTH_CONF: {
    clientID: process.env.YP_BOT_CLIENT_ID,
    clientSecret: process.env.YP_BOT_CLIENT_SECRET,
    callbackURL: process.env.YP_BOT_CALLBACK_URL,
    scope: ['identify', 'guilds']
  },
  SESSION_CONFIG: {
    secret: process.env.YP_BOT_SECRET,
    resave: false,
    saveUninitialized: false
  },
  CLIENT_URL: process.env.YP_BOT_CLIENT_URL
}

module.exports = config
