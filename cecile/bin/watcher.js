const gaze = require('gaze');
const logger = require('../helpers/logger');
const exec = require('child_process').exec

const execPath = `node ${__dirname}/build.js`;

module.exports = () => {
  gaze('./cecile/_build/js/**/*.js', (err, watcher) => {
    logger.info('JS Compiler started...');
    if (err) { logger.error(err); };

    watcher.on('all', () => {
      exec(`${execPath} --js`, (err, stdout, stderr) => {
        if (err) {
          return logger.error(err);
        }
        logger.success(stdout);
      });
    });
  });

  gaze('./cecile/static/scss/**/*.scss', (err, watcher) => {
    logger.info('SCSS Compiler started...');
    if (err) { logger.error(err); };

    watcher.on('all', () => {
      exec(`${execPath} --styles`, (err, stdout, stderr) => {
        if (err) {
          return logger.error(err);
        }
        console.log(stdout);
      });
    });
  });
};
