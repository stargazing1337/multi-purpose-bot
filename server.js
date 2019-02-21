const botconfig = require('./botconfig.json')
const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require("fs");
client.commands = new Discord.Collection();

//fs.readdir("./commands/", (err, files) => {
 // if(err) console.log(err);
 // let jsfile = files.filter(f => f.split(".")[0]);
 // if(jsfile.length <= 0){
 //   console.log("Couldn't find commands.");
 //   return
 // }
 // jsfile.forEach((command, i) =>{
  //  let props = require(`./commands/${command}`);
  //  console.log(`${command} loaded!`)
  //  client.commands.set(props.help.name, props)
 // })
//})

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require(`./commands/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(`${commandName} loaded!`);
    // Here we simply store the whole thing in the command Enmap. We're not running it right now.
    client.commands.set(commandName, props);
  });
});

client.on('ready',() => { // When bot is ready
  console.log('Bot is ready with username: ' + client.user.username) // Log when bot is ready
  client.user.setActivity(`people type !help`, {type: "WATCHING"});
});

module.exports.command = {
     name: 'command name',
    aliases: ["command aliases"/*Multiple works too*/],
    permission: "command permission",
    description: "command description",
    usage: "command usage",
    category: "command category",
    enabled: true // this is will make command enable or disable if its false it is disabled 
};

client.on('message', (message) => {
  if(message.author.bot) return
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]){
   prefixes[message.guild.id] = { 
     prefixes: botconfig.prefix
   };
  }
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);
  let prefix = prefixes[message.guild.id].prefixes;
  if(message.content.startsWith(prefix)){
  let commandfile = client.commands.get(cmd.slice(prefix.length).toLowerCase());
  if(commandfile) commandfile.run(client,message,args);
};
    console.log(cmd.slice(0,1));
});
client.login(process.env.TOKEN); // Never show your token