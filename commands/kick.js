const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  if(!kUser) return message.channel.send("Can't find user!");
  let kReason = args.join(" ").slice(22)
  
  
}

module.exports.help = {
  name: ""
}