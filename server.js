const botconfig = require('./config.json')
const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require("fs");
var prefix = prefix;
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return
  }
  jsfile.forEach((f, i) =>{
    let props = require (`./commands/${f}`);
    console.log(`${f} loaded!`)
    client.commands.set(props.help.name, props)
  })
})

client.on('ready',() => { // When bot is ready
  console.log('Bot is ready with username: ' + client.user.username) // Log when bot is ready
  client.user.setActivity(`people type !help`, {type: "WATCHING"});
});

client.on('message', (message) => { // When message is recieved
  if(message.author.bot) return // If the author is a bot exit code
  //if (!message.content.startsWith(prefix)) return; // If the message doesnt start with the prefix exit code
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
  if(prefix == cmd.slice(0,1)) { 
    let commandFile = client.commands.get(cmd.slice(prefix.length).toLowerCase()); 
    if(commandFile) commandFile.run(client,message,args);
  };
  console.log(prefix)
  console.log(cmd.slice(prefix.length));
})
client.login(botconfig.token); // Never show your token bruh