const {RichEmbed} = require("discord.js")

exports.run = async (client, message, args) => {
  //if(!args[0]) return message.reply("Usage: !8ball <question>");
  let replies = ["Heads", "Tails"];

  let result = Math.floor((Math.random() * replies.length));
  
  let embed = new RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#7289DA")
  .addField("Coinflip", replies[result]);
  message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['coin'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'coinflip',
    description: 'Flips a coin',
    usage: '8ball [question]'
};