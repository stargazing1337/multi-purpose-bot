const {RichEmbed} = require("discord.js")
const ms = require("ms")

module.exports.run = async (client, message, args) => {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.")
  if (tomute.hasPermission("MANAGE_SERVER")) return message.reply("Cannot mute user.");
  let muterole = message.guild.roles.fine(`name`, "muted");
  if(!muterole){
     try{
       muterole = await message.guild.createRole({
       name: "muted",
       color: "#00000",
       permissions:[]
       })
       message.guild.channels.forEach(async(channel, id) => {
         await channel.overwritePermission(muterole, {
         SEND_MESSAGES: false,
         ADD_REACTIONS: false
         });
       });
     }catch(e){
     console.log(e.stack);
     }
  }
  let mutetime = args[1];
  if(!mutetime) return message.reply("Mute time not specified");
  
  await(tomute.addrole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for $(ms(ms(mutetime)))`)
  
setTimeout(function(){
  tomute.removeRole(muterole.id)
  message.channel.send(`<@${tomute.id}> had been unmuted`);
}, ms(mutetime));
}

module.exports.help = {
  name: "tempmute"
}