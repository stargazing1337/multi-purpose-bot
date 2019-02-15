const {RichEmbed} = require("discord.js")

module.exports.run = async (client, message, args) => {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.")
  if (tomute.member.hasPermission("MANAGE_SERVER")) return message.reply("Cannot mute user.");
  let muterole = message.guild.roles.fine(`name`, "muted");
  if(!muterole){
     try{
       muterole = await message.guild.createRole({
       name: "muted",
       color: "#00000",
         
       })
     }})
}

module.exports.help = {
  name: "tempmute"
}