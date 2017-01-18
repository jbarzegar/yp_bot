const client = require('../conf/client');
const Channels = require('../conf/get-connected-clients');
const channelId = process.env.CHANNEL_ID;

const logger = require('../helpers/logger');

module.exports = message => {
  const voiceChannels = Channels();
  // Check to see if user typed in channel where half voice chat rule is enforced
  if (message.channel.id === channelId) {
    inspectChannel(voiceChannels);
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
        return message.author.sendMessage(`Hey ${message.author.username}. You just tried to talk in channel: **${message.channel.name}** in server: **${message.guild.name}**.  You can't do that unless you're connected to a voice channel`);
      }
    }
  }
};
