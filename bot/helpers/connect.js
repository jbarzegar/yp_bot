const client = require('../conf/client');
const { token } = require('../conf/config');
const Logger = require('./logger');

const logger = new Logger();

function connect() {
  client.login(token)
    .catch(err => logger.error(err));
};

module.exports = connect;
