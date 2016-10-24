const client = require('./client');

module.exports = () => {
  // Set empty array for all empty channels
  let connectedChannels = [];
  // Find all voice channels and return them
  const voiceChannels = client.channels.findAll('type', 'voice');
  // Loop through array, get rid of channels with no users connected
  for (let i in voiceChannels) {
    const membersInVoice = voiceChannels[i].members.array();
    // if users are connected to a channel. Push the channel id into an array
    if (membersInVoice.length !== 0) {
      connectedChannels.push(voiceChannels[i]);
    }
  }
  // Send channel id array
  return connectedChannels;
};
