const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .setTitle(`Help Menu`)
    .addField(`Info Commands`, "`help` `about` `ping`")
    .addField(`Admin Commands`,"`help` `about` `ping`")
    .setFooter("Prefix: ! | This bot is still under construction")
    .setTimestamp()
    message.channel.send(embed)    
}

module.exports.help = {
  name: "help"
}