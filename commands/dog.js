const {RichEmbed} = require("discord.js")
const superagent = require("superagent")

module.exports.run = async (client, message, args) => {
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);
  
  let embed = new RichEmbed()
  .setColor("#ff9900")
  .setTitle(":dog:")
  .setImage(body.url);
  message.channel.send(embed);
}

module.exports.help = {
  name: "dog"
}