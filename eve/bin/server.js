// Deps
const app = require('../index');
const http = require('http');
const logger = require('../helpers/logger');

logger.info('Starting EVE...');

const port = process.env.EVEPORT || 3001;
app.set('port', port);

// Create server
const server = http.createServer(app);
server.listen(port);

// Listeners for server
server.on('error', err => {
  const bind = typeof port === 'string'
     ? 'Pipe ' + port
     : 'Port ' + port;

  if (err.syscall !== 'listen') {
    throw err;
  }

  switch (err.code) {
    case 'EACCES':
      logger.error(`${bind} require elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw err;
  }
});

server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  logger.log(`listening on ${bind}`);
});
