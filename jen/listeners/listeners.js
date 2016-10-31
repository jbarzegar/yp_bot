const client = require('../conf/client');
const { logger } = require('../conf/config');
const getConnectedClients = require('../conf/get-connected-clients');

// Logs for ready state
client.on('ready', () => {
  logger.info('Client ready');
  getConnectedClients();
});

client.on('message', message => {
  require('./on_message')(message);
});

client.on('voiceStateUpdate', () => {
  getConnectedClients();
});
