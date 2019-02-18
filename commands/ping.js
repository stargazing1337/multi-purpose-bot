const {RichEmbed} = require("discord.js")

module.exports.run = async (client, message, args) => {
    var pong = `It took ` + Math.round(client.ping) + `ms to ping.`
    const embed = new RichEmbed()
    .setColor("#7289DA")
    .addField(`Pong!`, pong)
    message.channel.send(embed)    
}

module.exports.help = {
  name: "ping"
}