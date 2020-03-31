const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require("fs");
const path = require("path");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();



client.on('ready',() => {
  console.log(client.user.username + `: Ready to serve ${client.users.size} users in ${client.channels.size} channels of ${client.guilds.size} servers.`);
  client.user.setActivity(`users type !help`, {type: "WATCHING"});
});

client.on('message', (message) => {
  if(message.author.bot) return
  //let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  console.log(`${JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))[message.guild.id].prefix}`);
  console.log(`${process.env.PREFIX}`)
  if (!JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))[message.guild.id].prefix){
   JSON.parse(fs.writeFile("./prefixes.json", "utf8"))[message.guild.id].prefix = process.env.PREFIX;
  };
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);
  let prefix = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))[message.guild.id].prefix;
  if(message.content.startsWith(prefix)){
  let commandfile = client.commands.get(cmd.slice(prefix.length).toLowerCase()) || client.commands.get(client.aliases.get(cmd.slice(prefix.length).toLowerCase()));
  if(commandfile) commandfile.run(client, message, args, prefix);
}else return;
});
client.login(process.env.TOKEN); // Never reveal your token to others