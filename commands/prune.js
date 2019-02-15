const {RichEmbed} = require("discord.js")

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have sufficient priveliges.");
  if (!args[0] || args[0 == "help"]) return message.reply(`Usage: !prune <Desired amount>`)
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(Cleared ${args})
                                            })
  
}

module.exports.help = {
  name: "prune"
}