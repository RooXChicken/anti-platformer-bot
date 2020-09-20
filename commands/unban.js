const Discord = require("discord.js");
const client = 0;
require("dotenv").config();

module.exports = {
    name: 'unban',
    description: 'Unbans a specific user',
    execute(message, args) {
        const user = message.mentions.users.first();
        message.guild.members.unban(user);
        message.channel.send('User ' + user + ' has been unbanned');
        
    },
}