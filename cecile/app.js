const express = require('express');
const debug = require('morgan');
const router = require('./router/');

const CONFIG = require('./conf/config');

const app = express();

const stylus = require('express-stylus');
const axis = require('axis');

app.set('views', CONFIG.VIEWS_DIR);
app.set('view engine', 'pug');

app.use(debug('dev'));

app.use(express.static(CONFIG.STATIC_ASSETS_DIR));

app.use('/', router);

module.exports = app;
