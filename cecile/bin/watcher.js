const gaze = require('gaze');
const logger = require('../helpers/logger');

module.exports = () => {
  gaze('./cecile/_build/js/**/*.js', (err, watcher) => {
    logger.info('JS Compiler started...');
    if (err) { logger.error(err); };

    watcher.on('all', () => {
      require('./build')();
    });
  });
};
