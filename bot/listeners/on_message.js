// Handlers
const halfVoicers = require('../handlers/half_voicers');
const youPeople = require('../handlers/you_people');
const antiSelfPromo = require('../handlers/anti_self_promo');

// Commands
const define = require('../commands/define');

// Start all
module.exports = m => {
  // Handlers
  halfVoicers(m);
  youPeople(m);
  antiSelfPromo(m);
  // Commands
  define(m);
};
