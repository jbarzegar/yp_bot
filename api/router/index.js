const express = require('express')
const router = express.Router()

// Router sub routes
const auth = require('./auth/')

router.get('/', (req, res, next) => {
  res.send('Hello!')
})

router.use('/auth', auth)

module.exports = router
