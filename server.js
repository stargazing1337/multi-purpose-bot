const Discord = require('discord.js')
const client = new Discord.Client();

const prefix = '!'

// events

client.on('ready',() => { //when bot is ready
  console.log('Bot is ready with username: ' + client.user.username) // Log when bot is ready
  client.user.setActivity(`people type !help`, {type: "WATCHING"});
});

client.on('message', (message) => { // when message is recieved
  
  if(message.author.bot) return //If the author is a bot exit code
  if (!message.content.startsWith(prefix)) return; // If the message doesnt start with the prefix exit code
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g); //define args
  const command = args.shift().toLowerCase(); // define command
  
  if(command === "ping") { //Command ping
    message.channel.send('Pong! ' + Math.round(client.ping) + 'ms')
    
  }
  
})

client.login(process.env.TOKEN); //Never show your token bruh