const {RichEmbed} = require("discord.js")

module.exports.run = async (client, message, args) => {
    const embed = new RichEmbed()
    .setColor(0x7289DA)
    .setTitle(`Help Menu`)
    .addField(`Information Commands`, "`help` `about` `ping`")
    .addField(`Moderation Commands`,"`addrole` `ban` `kick` `prune` `removerole` `setprefix` `say` `tempmute`")
    .addField(`User Commands`,"`report` `serverinfo` `userinfo` `weather`")
    .addField(`Fun Commands`,"`8ball` `coinflip`")
    .setFooter("Prefix: ! | This bot is still under construction")
    .setTimestamp()
    message.channel.send(embed)    
}

module.exports.help = {
  name: "help"
}