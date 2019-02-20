const {RichEmbed} = require("discord.js")
const superagent = require("superagent")

module.exports.run = async (client, message, args) => {
  let {body} = await superagent
  .get(`https://random.cat/meaow`);
  
  let embed = new RichEmbed()
  .setColor("#ff9900")
  .setTitle("Cat")
  .setImage(body.file);
  message.channel.send(embed);
}

module.exports.help = {
  name: "dog"
}