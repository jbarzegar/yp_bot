module.exports = () => {
  const http = require('http');
  const chalk = require('chalk');
  const app = require('../app.js');
  const CONFIG = require('../conf/config');
  const logger = require('../helpers/logger');

  // Create http server
  const server = http.createServer(app);
  server.listen(CONFIG.PORT);

  // Start compiler if dev
  if (CONFIG.PROD === 'false') {
    require('./watcher')();
  }

  const handleErr = err => {
    if (err.syscall !== 'listen') {
      throw err;
    }

    const bind = typeof CONFIG.PORT === 'string'
      ? 'Pipe ' + CONFIG.PORT
      : 'Port ' + CONFIG.PORT;

    switch (err.code) {
      case 'EACCES':
        logger.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        logger.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw err;
    }
  };

  const handleListen = () => {
    const addr = server.address();
    const bind = typeof addr === 'string'
       ? 'pipe: ' + addr
       : 'port: ' + chalk.yellow(addr.port);
    logger.log(`Listing on ${bind}`);
  };

  server.on('error', handleErr);
  server.on('listening', handleListen);
};
