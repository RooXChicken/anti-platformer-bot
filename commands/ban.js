const Discord = require("discord.js");
const client = 0;
require("dotenv").config();

module.exports = {
    name: 'ban',
    description: 'Bans a specific user',
    execute(message, args) {
        const user = message.mentions.users.first();
        message.guild.members.ban(user);
        message.channel.send('User ' + user + ' has been banned');
    },
}