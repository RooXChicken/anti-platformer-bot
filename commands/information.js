const Discord = require("discord.js");
require("dotenv").config();

module.exports = {
    name: 'information',
    description: 'Information',
    execute(message, args) {
        message.channel.send('This is the discord server for my game The anti-Platformer! \n Commands are currently ;information');
    },
}