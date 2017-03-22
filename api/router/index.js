const express = require('express')
const router = express.Router()

// Router sub routes
const auth = require('./auth/')
router.use('/auth', auth)

router.get('/', (req, res) => {
  return res.send('Hello!')
})

module.exports = router
