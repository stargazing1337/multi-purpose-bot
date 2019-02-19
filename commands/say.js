const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (client, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  message.delete();
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say"
}