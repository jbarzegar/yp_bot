const slugify = str => {
  const slug = str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '+') // Replace spaces with -
    /* eslint-disable no-useless-escape */
    .replace(/\-\-+/g, '+'); // Replace multiple - with single -

  return slug;
};

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
  // Move all words into array
  const messageArr = messageStr.split(' ');
  const commandIndex = messageArr.indexOf(command);
  // Remove the command
  if (commandIndex !== -1) {
    messageArr.splice(commandIndex, 1);
  }
  // Check if arr is populated
  if (messageArr.length === 0) {
    return null;
  }

  const arg = slugify(messageArr.join(' '));
  return arg;
};

const exportObj = { isValidCommandStr, parseSingleCommandArg, slugify };
module.exports = exportObj;
