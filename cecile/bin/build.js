const fs = require('fs');
const browserify = require('browserify');
const path = require('path');
const logger = require('../helpers/logger');
const CONFIG = require('../conf/config');

const scss = require('node-sass');

function checkCompileFlags() {
  const flag = process.argv[2];
  if (flag === '--js') {
    compileJS(() => {
      console.log('Compiled JS');
    });
  } else if (flag === '--styles') {
    compileStyles();
  } else if (flag === '--all') {
    compileJS(() => {
      logger.success('Compiled JS');
      compileStyles();
    });
  } else {
    logger.error('You must pass in 1 argument');
    process.exit(1);
  }
}

function handleErr() {
  logger.error('Error compiling JS');
  return process.exit(1);
}

function compileJS(cb) {
  const entryPoint = path.join('cecile', '_build', 'js', 'main.js');
  const exitPoint = path.join('cecile', 'static', 'js', 'main.js');
  const presets = ['es2015'];

  browserify(entryPoint)
    .transform('babelify', { presets })
    .transform('uglifyify')
    .bundle()
    .on('error', () => handleErr)
    .pipe(fs.createWriteStream(exitPoint));

  if (cb) {
    cb();
  }
}

function compileStyles(cb) {
  const entry = `${CONFIG.STYL_ENTRY}/main.scss`;
  const output = `${CONFIG.CSS_ENTRY}/main.css`;
  scss.render({
    file: entry
  }, (err, result) => {
    if (err) {
      logger.error(`Error at: ${err.file} line: ${err.line} on column: ${err.column}`);
      return logger.warn(err.message);
    }
    fs.writeFile(output, result.css.toString('utf8'), err => {
      if (err) {
        return logger.error(err);
      }
      return console.log('Sass compiled');
    });
  });
}

checkCompileFlags();
