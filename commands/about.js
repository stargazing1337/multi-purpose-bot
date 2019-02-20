const {RichEmbed} = require("discord.js")

module.exports.run = async (client, message, args, prefix) => {
  let totalSeconds = (client.uptime / 1000);
  //let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.round(totalSeconds % 60);
  let uptime = `${hours} hrs ${minutes} mins ${seconds} secs`;
  
  const embed = new  RichEmbed()
  .setColor("#7289DA")
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
  .setFooter(`Prefix: ${prefix} | This bot is still under construction`)
  .setTimestamp()
  message.channel.send(embed)   
}

module.exports.help = {
  name: "about"
}