const {RichEmbed} = require("discord.js")

module.exports.run = async (client, message, args) => {
  
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  if(!kUser) return message.channel.send("Can't find user!");
  let kReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have sufficient priveliges.");
  if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("User cannot be kicked.")
  
  let embed = new RichEmbed()
  .setDescription("Kick")
  .setColor("#e56b00")
  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kReason)
  
  let incidentChannel = message.guild.channels.find(`name`, "incidents");
  if (!incidentChannel) return message.channel.send("Can't find incidents channel.");
  
  message.guild.member(kUser).kick(kReason)
  incidentChannel.send(embed);
  return;
}

module.exports.help = {
  name: "kick"
}