const { logger } = require('../conf/config');
const Channels = require('../conf/get-connected-clients');

function handleHalfVoicers(message, client) {
  const voiceChannels = Channels();
  // Check to see if user typed in channel where half voice chat rule is enforced
  if (message.channel.id === '214903274040459266' && message.author.id !== client.user.id) {
    // Check if anyone is in a voice channel
    if (voiceChannels.length === 0) {
      if (message.author.id !== client.user.id) {
        console.log('No one is in voice');
        message.delete()
          .then(msg => logger.info(`Deleted message from ${msg.author.id}`))
          .catch(err => logger.error(err));
        // Send message to user
        console.log(message.guild.name);
        message.author.sendMessage(`Hey you just tried to talk in channel: ${message.channel.name} in server:${message.guild.name}.  You can't do that shit fam`);
      }
    } else {
      // If there are users connected to a voice channel check if author is in one themselves
      for (let i in voiceChannels) {
        const user = voiceChannels[i].members.find('id', message.author.id);
        if (user !== null) {
          return console.log('User is in a voice channel');
        } else {
          if (message.author.id !== client.user.id) {
            message.delete()
              .then(msg => logger.info(`Deleted message from ${msg.author.id}`))
              .catch(err => logger.error(err));
            message.reply('You can\'t talk here unless you are connected to a voice channel');
          }
        }
      }
    }
  }
}

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
  }
}

module.exports = (message, client) => {
  handleHalfVoicers(message, client);
  checkMessage(message, client);
};
