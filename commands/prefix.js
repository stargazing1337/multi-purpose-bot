const {RichEmbed} = require("discord.js")
const fs = require("fs");

module.exports.run = async (client, message, args, cmd, prefix) => {
  if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You do not have sufficient priveliges.");
  if (!args[0] || args[0 == "help"]) return message.reply(`Usage: prefix <desired prefix here>`)
  if (args[0 > 1]) return message.reply(`Prefix can only be a single character.`)
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  
  prefixes [message.guild.id] = {
  prefixes: args.slice(0).join(" ")
  };
  
  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) =>{
  if (err) console.log(err)
  });
  
  let embed = new RichEmbed()
  .setColor("FF9900")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`)
  message.channel.send(embed);
}

module.exports.help = {
  name: "prefix"
}