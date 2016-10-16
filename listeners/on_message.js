const { logger } = require('../conf/config');
const Promise = require('bluebird');

function checkMessage(message, client) {
  const content = message.content.toLowerCase();

  // Check if the phrase 'you people' is in the string
  if (content.indexOf('you people') !== -1) {
    // Compare message to make sure that the bot won't keep sending messages
    if (message.author.id !== client.user.id) {
      return message.reply('Fuck you mean you people')
        .then(msg => logger.info(`Reply sent to ${msg.author.id}`))
        .catch(err => logger.warn(err));
    }
  } else {
    return logger.error('Not found');
  }
}

module.exports = (message, client) => {
  checkMessage(message, client);
};
