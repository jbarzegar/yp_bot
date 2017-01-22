const chalk = require('chalk');
const moment = require('moment');

class Logger {
  constructor() {
    this.times = moment().format('MMM,Do,YY HH:mma');

    this.timestamp = chalk.gray(`[${this.times}]:`);
  }
  log(text) {
    const output = `${this.timestamp} ${text}`;
    console.log(output);
  }
  info(text) {
    const output = `${this.timestamp} ${chalk.cyan(text)}`;
    console.info(output);
  }
  warn(text) {
    const output = `${this.timestamp} ${chalk.yellow.bold(text)}`;
    console.warn(output);
  }
  error(text) {
    const output = `${this.timestamp} ${chalk.red.bold(text)}`;
    console.error(output);
  }
  success(text) {
    const output = `${this.timestamp} ${chalk.green(text)}`;
    console.log(output);
  }

}

module.exports = new Logger();
