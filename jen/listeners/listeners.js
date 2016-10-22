const client = require('../conf/client');
const { logger } = require('../conf/config');

// Logs for ready state
client.on('ready', () => {
  logger.info('Client ready');
});

client.on('message', message => {
  require('./on_message')(message, client);
});
