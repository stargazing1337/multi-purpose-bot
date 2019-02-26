const {RichEmbed} = require("discord.js")
const superagent = require("superagent")

exports.run = async (client, message, args) => {
  let {body} = await superagent
  .get(`http://aws.random.cat/meow`);
  
  let embed = new RichEmbed()
  .setColor("#7289DA")
  .setTitle(":cat:")
  .setImage(body.file);
  message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['c'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'cat',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};