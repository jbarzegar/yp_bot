module.exports = message => {
  const request = require('request-promise');
  const logger = require('../helpers/logger');
  const messageHandler = require('../helpers/message');
  const config = require('../conf/config');
  const { isValidCommandStr, parseSingleCommandArg } = require('../helpers/command_reader');

  // Get the command reference
  const command = '!define';
  // Base url for urban dictionary
  const udAPI = 'http://api.urbandictionary.com/v0/define?term=';

  const getRandomDef = defArr => {
    const arrItemNum = defArr.length;
    const randomNum = Math.floor(Math.random() * arrItemNum);
    const definition = defArr[randomNum];
    sendDef(definition);
  };

  const sendDef = definition => {
    const format =
    `\n \n**${definition.word.toUpperCase()}** \n \n*${definition.definition}* \n \n${definition.example} \n \n`;
    return message.reply(format);
  };

  const getDef = () => {
    // Determine if command is valid
    const commandIsValid = isValidCommandStr(message.content, command);
    if (commandIsValid) {
      const argument = parseSingleCommandArg(message.content, command);
      if (argument === null) {
        return messageHandler.reply(message, 'You forgot to include a word or two');
      }
      logger.log(`${message.author.username} is looking up ${argument.replace(/[+]/g, ' ')}`);

      // If valid continue flow and make api call
      request(udAPI + argument)
        .then(resp => getRandomDef(JSON.parse(resp).list))
        .catch(err => {
          logger.error(`Error for: ${message.author.username} ${err}`);
          messageHandler.reply(message, `For some reason you fucked up: ${err}`);
        });
    }
  };

  // Check if message starts with command prefix if it doesn't. Ignore the message
  if (message.content.startsWith(config.commandPrefix)) {
    getDef();
  }
};
