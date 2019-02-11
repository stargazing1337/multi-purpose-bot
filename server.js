const Discord = require('discord.js')
const client = new Discord.Client();

const prefix = '!'

// events

client.on('ready',() => { //when bot is ready
  
  console.log('Bot is ready with username: ' + client.user.username) // Log when bot is ready
  client.user.setActivity(`basics`, {type: "WATCHING"});
});

client.on('message', (message) => { // when message is recieved
  
  if(message.author.bot) return //If the author is a bot exit code
  if (!message.content.startsWith(prefix)) return; // 