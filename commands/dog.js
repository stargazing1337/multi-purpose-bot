const {RichEmbed} = require("discord.js")
const superagent = require("superagent")

module.exports.run = async (client, message, args) => {
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);
  
  let embed = new RichEmbed()
  .setColor("#7289DA")
  .setTitle(":dog:")
  .setImage(body.url);
  message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['8'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'dog',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};