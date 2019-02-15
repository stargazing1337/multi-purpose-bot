const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  if(!bUser) return message.channel.send("Can't find user!");
  let bReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You do not have sufficient priveliges.");
  if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("User cannot be banned.")
  
  let embed = new Discord.RicheEmbed()
  .setDescription("Ban")
  .setColor("#e56b00")
  .addField("Banned User", `${bUser} with ID ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Banned in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason)
  
  let incidentChannel = message.guild.channels.find(`name`, "incidents");
  if (!incidentChannel) return message.channel.send("Can't find incidents channel.");
  
  message.guild.member(bUser).ban(bReason)
  incidentChannel.send(embed);
  
  return;
  
}

module.exports.help = {
  name: "ban"
}