const {RichEmbed} = require("discord.js")

module.exports.run = async (client, message, args) => {
  //if(!args[0]) return message.reply("Usage: !8ball <question>");
  let replies = ["Heads", "Tails"];

  let result = Math.floor((Math.random() * replies.length));
  
  let embed = new RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#FF9900")
  .addField(replies[result]);
  message.channel.send(embed);
}

module.exports.help = {
  name: "coinflip"
}