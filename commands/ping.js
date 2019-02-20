const {RichEmbed} = require("discord.js")

module.exports.run = async (client, message, args) => {
    const m = await message.channel.send("Ping?");
    const pong = await 
    //var pong = `Latency is ${m.createdTimestamp - message.createdTimestamp}ms`
    pong.edit(`doo`);
    var api = `API Latency is ${Math.round(client.ping)}ms`
    const embed = new RichEmbed()
    .setColor("#7289DA")
    .addField(`Pong!`, `${pong} | ${api}`)
    message.channel.send(embed)
  
  
    //m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
}

module.exports.help = {
  name: "ping"
}