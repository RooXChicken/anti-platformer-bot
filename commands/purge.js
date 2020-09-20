const Discord = require("discord.js");
require("dotenv").config();

module.exports = {
    name: 'purge',
    description: 'Purges a certain amount of messages',
    execute(message, args) {
        let purgeValue = args.join(" ");
        message.channel.bulkDelete(purgeValue);
    },
}