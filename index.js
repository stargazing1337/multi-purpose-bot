const botconfig = require('./config.json')
const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require("fs");
const path = require("path");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  console.log(`Loading a total of ${files.length} commands.`);
  files.forEach(file => {
if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    console.log(`Loading Command: ${props.help.name} ✔`);
    client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

function walk(dir, callback) {
    fs.readdir(dir, function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
            var filepath = path.join(dir, file);
            fs.stat(filepath, function(err,stats) {
                if (stats.isDirectory()) {
                    walk(filepath, callback);
                } else if (stats.isFile() && file.endsWith('.js')) {
                    console.log("This is .js file")
                }
            });
        });
    });
}
walk(`./commands/`)

client.on('ready',() => { // When bot is ready
  console.log(client.user.username + `: Ready to serve ${client.users.size} users in ${client.channels.size} channels of ${client.guilds.size} servers.`);
  client.user.setActivity(`users type !help`, {type: "WATCHING"});
});

client.on('message', (message) => {
  if(message.author.bot) return
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  let incidentChannel = JSON.parse(fs.readFileSync("./config", "utf8"))
  if (!prefixes[message.guild.id]){
   prefixes[message.guild.id] = { 
     prefixes: process.env.PREFIX
   };
  };
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);
  let prefix = prefixes[message.guild.id].prefixes;
  if(message.content.startsWith(prefix)){
  let commandfile = client.commands.get(cmd.slice(prefix.length).toLowerCase()) || client.commands.get(client.aliases.get(cmd.slice(prefix.length).toLowerCase()));
  if(commandfile) commandfile.run(client,message,args);
};
  console.log(`${messageArray.slice(1)}`);
});
client.login(process.env.TOKEN); // Never show your token