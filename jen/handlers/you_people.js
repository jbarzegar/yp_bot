const client = require('../conf/client');

const logger = require('../helpers/logger');

module.exports = message => {
  const content = message.content.toLowerCase();
  /*
    Check if the phrase 'you people' is in the string
    Compare message to make sure that the bot won't keep sending messages
  */
  if (content.indexOf('you people') !== -1 && message.author.id !== client.user.id) {
    return message.reply('Fuck you mean you people')
      .then(msg => logger.info(`Reply sent to ${msg.author.id}`))
      .catch(err => logger.warn(err));
  }
};
