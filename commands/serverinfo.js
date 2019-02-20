const {RichEmbed} = require("discord.js")

module.exports.run = async (client, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new RichEmbed()
    .setDescription("Server Information")
    .setColor("#7289DA")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}