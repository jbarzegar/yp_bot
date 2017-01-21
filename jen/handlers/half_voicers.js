const Channels = require('../conf/get-connected-clients');
const channelId = process.env.CHANNEL_ID;

const messageHandler = require('../helpers/message');

module.exports = message => {
  const voiceChannels = Channels();
  // Check to see if user typed in channel where half voice chat rule is enforced
  if (message.channel.id === channelId) {
    inspectChannel(voiceChannels);
  }

  function inspectChannel(voiceChannels) {
    // Check if anyone is in a voice channel
    if (voiceChannels.length === 0) {
      handleMessage();
    } else {
      // If there are users connected to a voice channel check if author is in one themselves
      const user = message.member.voiceChannelID;
      if (user === null) {
        return handleMessage();
      }
      return;
    }
  }

  function handleMessage() {
    messageHandler.delete(message);

    const response = `Hey ${message.author.username}. You just tried to talk in channel: **${message.channel.name}** in server: **${message.guild.name}**.  You can't do that unless you're connected to a voice channel`;
    // Send message to user
    return messageHandler.sendPrivateMessage(message, response);
  }
};
