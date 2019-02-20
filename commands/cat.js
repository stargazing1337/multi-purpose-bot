const {RichEmbed} = require("discord.js")
const superagent = require("superagent")

module.exports.run = async (client, message, args) => {
  let {body} = await superagent
  .get(`http://aws.random.cat/meow`);
  
  let embed = new RichEmbed()
  .setColor("#7289DA")
  .setTitle(":cat:")
  .setImage(body.file);
  message.channel.send(embed);
}

module.exports.help = {
  name: "cat"
}