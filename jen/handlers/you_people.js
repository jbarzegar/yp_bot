const messageHandler = require('../helpers/message');

module.exports = message => {
  const content = message.content.toLowerCase();
  /*
    Check if the phrase 'you people' is in the string
    Compare message to make sure that the bot won't keep sending messages
  */
  if (content.indexOf('you people') !== -1) {
    const response = 'Fuck you mean you people';
    return messageHandler.reply(message, response);
  }
};
