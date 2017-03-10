// Handlers
const halfVoicers = require('../handlers/half_voicers');
const youPeople = require('../handlers/you_people');

// Commands
const define = require('../commands/define');

// Start all
module.exports = (m) => {
  // Handlers
  halfVoicers(m);
  youPeople(m);
  // Commands
  define(m);
};
