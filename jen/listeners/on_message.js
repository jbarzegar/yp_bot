const { logger } = require('../conf/config');

function checkMessage(message, client, channels) {
  const voiceChannels = channels();
  // Check to see if user typed in channel where half voice chat rule is enforced
  if (message.channel.id === '237325959395672064') {
    // Check if anyone is in a voice channel
    if (voiceChannels.length === 0) {
      console.log('No one is in voice');
      // Delete users message and send reminder
      message.delete()
        .then(msg => logger.info(`Deleted message from ${msg.author.id}`))
        .catch(err => logger.error(err));
      message.reply('You can\'t talk here unless you are connected to a voice channel');
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

module.exports = (message, client, channels) => {
  checkMessage(message, client, channels);
};
