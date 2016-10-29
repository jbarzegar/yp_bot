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
    handleMessage(0);
  } else {
    // If there are users connected to a voice channel check if author is in one themselves
    for (let i in voiceChannels) {
      const user = voiceChannels[i].members.find('id', message.author.id);
      if (user !== null && voiceChannels[i].members.array().length > 1) {
        console.log(voiceChannels[i].members.array().length);
        return console.log('User is in a voice channel');
      } else if (user !== null && voiceChannels[i].members.array().length === 1) {
        // return console.log('They are the only one in a channel');
        return handleMessage(1);
      }
      return handleMessage(0);
    }
  }
}

/*
  ======= CASES FOR HANDLE MESSAGE FUNCTION =======
  The cases will be handled with ints for ease of writing
  0: Not in half voice
    When a user is not connected to the half voice chat

  1: Only one in channel
    User is trying to type while being the only one in a voice channel.  Need at least 2 people to chat

*/
function handleMessage(code) {
  if (message.author.id !== client.user.id) {
    message.delete()
      .then(msg => logger.info(`Deleted message from ${msg.author.id}, ${msg.author.username}`))
      .catch(err => logger.error(err));

    if (code === 0) {
      // Send message to user
      console.log(message.author);
      return message.author.sendMessage(`Hey ${message.author.username}. You just tried to talk in channel: **${message.channel.name}** in server: **${message.guild.name}**.  You can't do that unless you have yourself and at least one other person connected to the same voice channel`);
    } else if (code === 1) {
      return message.author.sendMessage(`Hey ${message.author.username}. You need to have at least one other person in your voice channel to use **${message.channel.name}**`);
    }
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
