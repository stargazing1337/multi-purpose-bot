exports.run = async (client, message, args) => {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Usage: !tomute <@user> <#s/h/d/m>");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "Muted");
  tomute.removeRole(muterole.id);
  message.channel.send(`<@${tomute.id}> has been unmuted!`);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tm'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'tempmute',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};