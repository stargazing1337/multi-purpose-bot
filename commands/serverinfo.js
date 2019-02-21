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

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['8'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'serverinfo',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};