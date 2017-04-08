const client = require('../conf/client');
const logger = require('../helpers/logger');
const getConnectedClients = require('../conf/get-connected-clients');

// Logs for ready state
client.on('ready', () => {
  logger.info('Client ready');
  getConnectedClients();
});

client.on('disconnect', (event) => {
  logger.log(event);
  logger.error('Client has disconnected');
});

client.on('message', message => {
  require('./on_message')(message);
});

client.on('voiceStateUpdate', () => {
  getConnectedClients();
});
