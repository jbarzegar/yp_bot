// Check if command is legit or not
const isValidCommandStr = (messageStr, command) => {
  const commandAtStart = messageStr.startsWith(command);
  const parsedCommand = messageStr.substr(0, command.length);

  if (commandAtStart && parsedCommand === command) {
    return true;
  } else {
    return false;
  }
};

// Parse arguments
const parseSingleCommandArg = (messageStr, command) => {
  const arg = messageStr.substr(command.length, messageStr.length).replace(' ', '');
  if (arg === '' || arg === undefined) {
    return null;
  } else {
    return arg;
  }
};

const exportObj = { isValidCommandStr, parseSingleCommandArg };
module.exports = exportObj;
