const client = require('../conf/client');

const { logger } = require('../conf/config');
const Channels = require('../conf/get-connected-clients');

let message;

const channelId = process.env.CHANNEL_ID;

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
    const user = message.member.voiceChannelID;
    if (user === null) {
      return handleMessage(0);
    }
    return;
  }
}

/**
 * [Function containing all ways for bot to handle messages with the use of codes]
 * @method handleMessage
 * @param  {[int]}      code [Determines what action to take.  0: Not in half voice]
 * @return {[function]}           [Returns a sendMessage function]
 */
function handleMessage(code) {
  if (message.author.id !== client.user.id) {
    message.delete()
      .then(msg => logger.info(`Deleted message from ${msg.author.id}, ${msg.author.username}`))
      .catch(err => logger.error(err));

    if (code === 0) {
      // Send message to user
      return message.author.sendMessage(`Hey ${message.author.username}. You just tried to talk in channel: **${message.channel.name}** in server: **${message.guild.name}**.  You can't do that unless you have yourself and at least one other person connected to the same voice channel`);
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
