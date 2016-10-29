// Deps
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Db
require('./db/db');

// Router
require('./router/router');
// Models

// All other express settings

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app;
