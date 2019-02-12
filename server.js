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
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g); // Define args
  const command = args.shift().toLowerCase(); // Define command

  if(command === "ping") { // Command ping
    var pong = `It took ` + Math.round(client.ping) + `ms to ping.`
    const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .addField(`Pong!`, pong)
    message.channel.send({embed: embed})    
  }
  
  if (command === "help") {  
    const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .setTitle(`Help Menu`)
    .addField(`Info Commands`, "`help` `about` `ping`")
    .addField(`Admin Commands`,"`help` `about` `ping`")
    .setFooter("Prefix: ! | This bot is still under construction")
    .setTimestamp()
    message.channel.send(embed)    
  }
  
  let totalSeconds = (client.uptime / 1000);
  //let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.round(totalSeconds % 60);
  let uptime = `${hours} hrs ${minutes} mins ${seconds} secs`;
  
  if (command === "about") {
    const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .addField(`Version`, `1.0`, true)
    .addField(`Node JS`, `8.x`, true)
    .addField(`Library`, `[discord.js](https://discord.js.org/#/)`, true)
    .addField(`Uptime`, `${uptime}`, true)
    .addField(`Servers`, `${client.guilds.size}`, true)
    .addField(`Users`, `${client.users.size}`, true)
    .addField(`Website`, `[Not available yet]`, true)
    .addField(`Discord`, `[Not available yet]`, true)
    .addField(`Invite`, `[Not available yet]`, true)
    .addField(`Developer`, `Kotobro#5754`, true)
    .setFooter("Prefix: ! | This bot is still under construction")
    .setTimestamp()
    message.channel.send(embed)    
  }
  
    if (command.startsWith('prune')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
      message.channel.bulkDelete(args[0]).then(()=> {
      message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000))
      })}
})
client.login(process.env.TOKEN); // Never show your token bruh