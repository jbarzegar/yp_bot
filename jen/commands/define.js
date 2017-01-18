module.exports = message => {
  const request = require('request-promise');

  const command = '!define';
  const logger = require('../helpers/logger');
  const { isValidCommandStr, parseSingleCommandArg } = require('../helpers/command_reader');

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

  const commandIsValid = isValidCommandStr(message.content, command);
  if (commandIsValid) {
    const argument = parseSingleCommandArg(message.content, command);
    logger.log(`${message.author.username} is looking up ${argument}`);
    if (argument === null) {
      return message.reply('You forgot to include a word or two');
    }
    request(udAPI + argument)
      .then(resp => getRandomDef(JSON.parse(resp).list))
      .catch(err => {
        logger.error(`Error for: ${message.author.username} ${err}`);
        message.reply(`For some reason you fucked up: ${err}`);
      });
  }
};
