// Config and Helpers
const { MONGODB } = require('../config/config');
const logger = require('../helpers/logger');
// Mongoose
const mongoose = require('mongoose');

// Connect to mongodb
mongoose.connect(MONGODB.URL);

const db = mongoose.connection;

db.on('error', err => {
  logger.error(`Connection Error: ${err}`);
});

db.once('open', () => {
  logger.success('Mongodb is running');
});
