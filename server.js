

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
    var pong = 'It took ' + Math.round(client.ping) + 'ms to ping.'
    const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .addField('Pong!', [pong])
    message.channel.send({embed: embed})    
  }
  
  if (command === "help") {
   // message.channel.send ("Help1!!!!!!!!!!!!!!")
    
    const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .setTitle('Help Menu')
    .addField('poo',['Help'])
    message.channel.send({embed:embed})    
  }
  
  let totalSeconds = (client.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  
  let uptime = `${days}, ${hours}:${minutes};${seconds} seconds`;
  
  if (command === "about") {
    const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .addField(`Version`, `1.0`, true)
    .addField(`Node JS`, `8.x`, true)
    .addField(`Library`, `[discord.js](https://discord.js.org/#/)`, true)
    .addField(`Uptime`, `${uptime}`, true)
    .addField(`Servers`, `${client.guilds.size}`, true)
    .setFooter("Prefix: ! | This bot is still under construction")
    message.channel.send({embed:embed})    
  }
})
client.login(process.env.TOKEN); // Never show your token bruh