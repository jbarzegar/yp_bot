// Store client object
const Discord = require('discord.js');
const client = new Discord.Client({ autoReconnect: true, bot: true });

module.exports = client;
