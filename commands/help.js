const Discord = require("discord.js");
require("dotenv").config();

module.exports = {
    name: 'help',
    description: 'Help',
    execute(message, args) {
        message.channel.send('');
    },
}