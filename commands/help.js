const {RichEmbed} = require("discord.js")

module.exports.run = async (client, message, args) => {
    const embed = new RichEmbed()
    .setColor(0x7289DA)
    .setTitle(`Help Menu`)
    .addField(`Info Commands`, "`help` `about` `ping`")
    .addField(`Moderation Commands`,"`ban` `kick` `setprefix`")
    .setFooter("Prefix: ! | This bot is still under construction")
    .setTimestamp()
    message.channel.send(embed)    
}

module.exports.help = {
  name: "help"
}