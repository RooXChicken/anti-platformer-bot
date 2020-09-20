const Discord = require("discord.js");
const client = 0;
require("dotenv").config();

module.exports = {
    name: 'givedeveloper',
    description: 'Gives the developer role',
    execute(message, args) {
        message.delete();
        message.channel.send('```React with the emoji to get developer role. \nThis will give you access to the developer category and will also display you as a developer.```').then(function (message) {
            message.react("🖥️")});
    },
}