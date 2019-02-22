const {RichEmbed} = require("discord.js")

module.exports.run = async (client, message, args) => {
  
  if(!args[2]) return message.reply("Usage: !8ball <question>");
  let replies = ["It is certain.",
                 "It is decidedly so.",
                 "Without a doubt.",
                 "Yes - definitely.",
                 "You may rely on it.",
                 "As I see it, yes.",
                 "Most likely.",
                 "Outlook good.",
                 "Yes.",
                 "Signs point to yes.",
                 "Reply hazy, try again.",
                 "Ask again later.",
                 "Better not tell you now.",
                 "Cannot predict now.",
                 "Concentrate and ask again.",
                 "Don't count on it.",
                 "My reply is no.",
                 "My sources say no.",
                 "Outlook not so good.",
                 "Very doubtful."];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");
  
  let embed = new RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#7289DA")
  .addField("Question", question)
  .addField("Answer", replies[result]);
  message.channel.send(embed);
}

exports.conf = {
    //enabled: false,
   // guildOnly: false,
    aliases: ['8'],
   // permLevel: 0
  };
  
  exports.help = {
    name: '8ball',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};