const {RichEmbed} = require("discord.js")
const fs = require("fs");

exports.run = async (client, message, args) => {
  
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]){
   prefixes[message.guild.id] = { 
     prefixes: process.env.PREFIX
   };
  };
  
  let totalSeconds = (client.uptime / 1000);
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
  .setFooter(`Prefix: ${prefixes[message.guild.id].prefixes} | This bot is still under construction`)
  .setTimestamp()
  message.channel.send(embed)   
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  };
  
  exports.help = {
    name: 'about',
    description: 'Displays the about section.',
    usage: 'about'
};