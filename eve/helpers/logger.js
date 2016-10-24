const chalk = require('chalk');
const moment = require('moment');
const format = moment().format('MM:D:YY:h:mm:a');
const timestamp = chalk.gray(`[${format}]`);

const logger = {
  error(msg) {
    console.log(`${timestamp} ${chalk.red.bold(msg)}`);
  },

  warn(msg) {
    console.log(`${timestamp} ${chalk.yellow.bold(msg)}`);
  },

  success(msg) {
    console.log(`${timestamp} ${chalk.green.bold(msg)}`);
  },

  info(msg) {
    console.log(`${timestamp} ${chalk.magenta.bold(msg)}`);
  },

  log(msg) {
    console.log(`${timestamp} ${chalk.cyan.bold(msg)}`);
  }
};

module.exports = logger;
