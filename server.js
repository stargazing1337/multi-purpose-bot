const Discord = require('discord.js')
const client = new Discord.Client();

const prefix = '!'

client.on('ready',() => { // When bot is ready
  console.log('Bot is ready with username: ' + client.user.username) // Log when bot is ready
  client.user.setActivity(`people type !help`, {type: "WATCHING"});
});

client.on('message', (message) => { // When message is recieved
  
  if(message.author.bot) return // If the author is a bot exit code
  if (!message.content.startsWith(prefix)) return; // If the message doesnt start with the prefix exit code
  
  const args = message.content.slice(prefix.length).trim().split(/ +g/); // Define args
  const command = args.shift().toLowerCase(); // Define command

  
  
  if(command === "ping") { // Command ping
    var pong = 'Pong! ' + Math.round(client.ping) + 'ms'
    const embed = new Discord.RichEmbed().setColor(0x7289DA).addField('Pong!', [pong])
    message.channel.send({embed: embed})
    //message.channel.send('Pong! ' + Math.round(client.ping) + 'ms')
    
  }
})

client.login(process.env.TOKEN); // Never show your token bruh