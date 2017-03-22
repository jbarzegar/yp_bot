const app = require('../app')
const http = require('http')
const logger = require('sane-node-logger')

const port = process.env.PORT || '5000'
app.set('port', port)

const server = http.createServer(app)

function handleListen() {
  logger.success(`Listening on port: ${port}`)
}

function handleErr(err) {
  logger.error(err)
}

server.listen(port)
server.on('error', handleErr)
server.on('listening', handleListen)
