const logger = require('./logger');
const client = require('../conf/client');

const messageAuthorSafety = message => {
  return new Promise((resolve, reject) => {
    // If message sender id and bot id don't matchup keep going
    message.author.id !== client.user.id ? resolve(true) : reject(false);
  });
};

const messageHandler = {
  reply(message, response) {
    messageAuthorSafety(message)
      .then(() => { message.reply(response); })
      .catch(err => err);
  },
  sendPrivateMessage(message, response) {
    message.author.sendMessage(response);
  },
  delete(message) {
    message.delete()
      .then(msg => logger.info(`${message.author.username} Message deleted`))
      .catch(err => logger.error(err));
  }
};

module.exports = messageHandler;
