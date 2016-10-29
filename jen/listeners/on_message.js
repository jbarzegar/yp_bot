const client = require('../conf/client');

const { logger } = require('../conf/config');
const Channels = require('../conf/get-connected-clients');

let message;

const channelId = '237325959395672064';

function handleHalfVoicers() {
  const voiceChannels = Channels();
  // Check to see if user typed in channel where half voice chat rule is enforced
  if (message.channel.id === channelId) {
    inspectChannel(voiceChannels);
  }
}

function inspectChannel(voiceChannels) {
  // Check if anyone is in a voice channel
  if (voiceChannels.length === 0) {
    handleMessage();
  } else {
    // If there are users connected to a voice channel check if author is in one themselves
    for (let i in voiceChannels) {
      const user = voiceChannels[i].members.find('id', message.author.id);
      if (user !== null) {
        return console.log('User is in a voice channel');
      }
      handleMessage();
    }
  }
}

function handleMessage() {
  if (message.author.id !== client.user.id) {
    message.delete()
      .then(msg => logger.info(`Deleted message from ${msg.author.id}, ${msg.author.username}`))
      .catch(err => logger.error(err));
    // Send message to user
    message.author.sendMessage(`Hey you just tried to talk in channel: **${message.channel.name}** in server: **${message.guild.name}**.  You can't do that shit fam`);
  }
}

function checkMessage() {
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
}

module.exports = (m) => {
  message = m;
  handleHalfVoicers();
  checkMessage();
};
