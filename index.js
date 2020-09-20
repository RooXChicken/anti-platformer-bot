const Discord = require("discord.js");
const fs = require("fs");
const ban = require("./commands/ban");
const givedeveloper = require("./commands/givedeveloper");
const client = new Discord.Client()
const prefix = ";";
require("dotenv").config()
var key = process.env.API;
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

givedeveloper.client = client;
ban.client = client;

client.on("message", async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;
  
  const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        const errorEmbed = new Discord.MessageEmbed()
            .setTitle("Error")
            .setDescription(error)
            .setTimestamp()
            .setFooter("Please report this to an administrator!")
        console.error(error);
        message.reply('there was an\ error trying to execute that command!');
        message.channel.send(errorEmbed)
    }  
});

client.login(process.env.TOKEN)