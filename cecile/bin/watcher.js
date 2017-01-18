const gaze = require('gaze');
const logger = require('../helpers/logger');

const { compileJS, compileStyles } = require('./build');

module.exports = () => {
  gaze('cecile/_build/js/**/*.js', (err, watcher) => {
    logger.info('JS Compiler started... Waiting for file change...');
    if (err) { logger.error(err); };

    watcher.on('all', () => {
      compileJS();
    });
  });

  gaze('cecile/static/scss/**/*.scss', (err, watcher) => {
    logger.info('SCSS Compiler started... Waiting for file change...');
    if (err) { logger.error(err); };

    watcher.on('all', (event, filepath) => {
      compileStyles();
    });
  });
};
