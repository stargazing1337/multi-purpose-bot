const {RichEmbed} = require("discord.js")

module.exports.run = async (client, message, args) => {
    var pong = `It took ` + Math.round(client.ping) + `ms to ping.`
    const embed = new RichEmbed()
    .setColor("#7289DA")
    .addField(`Pong!`, pong)
    message.channel.send(embed)    
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['8'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ping',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};