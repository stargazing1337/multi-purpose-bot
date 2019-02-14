const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
 let rUser = message.guild.member(message.mention.users.first() || message.guild.members.get(args[0]))
 if (!rUser) return message.channel.send("Couldn't find user.");
 let reason = args.join(" ").slice(22);
  
  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor(0x7289DA)
  .addField("Reported User", `${rUser} with ID: $(rUser.id)`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField ("Channel", )
  message.channel.send(reportEmbed);
  
  return
}

module.exports.help = {
  name: ""
}