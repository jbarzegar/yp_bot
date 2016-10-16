const chalk = require('chalk');
// Config json
const config = {
  token: process.env.JEN_BOT,
  logger: {
    warn(message) {
      console.warn(chalk.yellow(message));
    },
    error(message) {
      console.error(chalk.red(message));
    },
    info(message) {
      console.info(chalk.blue(message));
    },
    success(message) {
      console.log(chalk.green(message));
    }
  }
};

module.exports = config;
