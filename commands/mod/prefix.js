const {RichEmbed} = require("discord.js")
const fs = require("fs");

exports.run = async (client, message, args, prefix) => {
  if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You do not have sufficient priveliges.");
  if (!args[0] || args[0 == "help"]) return message.reply(`Usage: ${prefix}prefix <desired prefix here>`)
  //let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
  
 prefix[message.guild.id] = {
  prefix: args.slice(0).join(" ")
  };
  
  fs.writeFile("./prefixes.json", JSON.stringify(prefix), (err) =>{
  if (err) console.log(err)
  });
  
  let embed = new RichEmbed()
  .setColor("#7289DA")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`)
  message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pre'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'prefix',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};