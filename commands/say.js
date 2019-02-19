const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (client, message, args) => {

  if(!args [0] || args[0] == "help"){
   message.reply("Usage: !say <#channel> <word or sentence>");
   return;
  }
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  
  
  message.delete();
  let botmessage;
  let channel = message.mentions.channels.first()
  if(channel) {
    botmessage = args.slice(1).join("")
    channel.send(botmessage)
  } else {
   botmessage = args.join(" ");
   message.channel.send(botmessage)
  }
}
module.exports.help = {
  name: "say",
  help: ""
}