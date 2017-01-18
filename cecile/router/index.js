const express = require('express');

const router = express.Router();

const clientId = `client_id=265942084488265728`;
const scope = `scope=bot&identify&guilds.join`;
// Read messages Send messages
const permissions = `permissions=0x00000008`;
const response = `response_type=code`;

const discordlink = `https://discordapp.com/api/oauth2/authorize?${clientId}&${scope}&${permissions}&${response}`;

router.get('/', (req, res) => {
  res.render('index', { title: 'Hello world!', loginlink: discordlink });
});

module.exports = router;
