const client = require('../conf/client');
const { token } = require('../conf/config');
const logger = require('./logger');

function connect() {
  client.login(token)
    .catch(err => logger.error(err));
};

module.exports = connect;
