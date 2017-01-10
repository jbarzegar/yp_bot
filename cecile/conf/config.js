const path = require('path');

const baseDir = path.join('.', 'cecile');
const staticPath = path.join(baseDir, 'static');

const CONFIG = {
  PROD: process.env.PROD,
  STATIC_ASSETS_DIR: staticPath,
  JS_ENTRY: path.join(staticPath, 'js'),
  STYL_ENTRY: path.join(staticPath, 'stylus'),
  CSS_ENTRY: path.join(staticPath, 'css'),
  VIEWS_DIR: path.join(baseDir, 'views'),
  PORT: 3000
};

module.exports = CONFIG;
