const botconfig = require('./botconfig.json')
const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require("fs");
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
  
  let prefix = prefixes[message.guild.id].prefixes;
  

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);
  let commandFile = client.commands.get(cmd.slice(prefix.length))
  if (commandFile) commandFile.run(client,message,args);
  
    if (cmd.startsWith('prune')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
      message.channel.bulkDelete(10).then(()=> {
      message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000))
      })}
})
client.login(botconfig.token); // Never show your token bruh