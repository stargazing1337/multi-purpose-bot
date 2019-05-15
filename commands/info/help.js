const {RichEmbed} = require("discord.js")

exports.run = async (client, message, args, prefix, prefixes, props) => {

if (!args[0]){
    const embed = new RichEmbed()
    .setColor("#7289DA")
    .setTitle(`Help Menu`)
    .addField(`Information Commands`, "`help` `about` `ping` `serverinfo` `userinfo` `weather`")
    .addField(`Moderation Commands`,"`addrole` `ban` `kick` `prune` `removerole` `prefix` `say` `tempmute`")
    .addField(`User Commands`,"`report`")
    .addField(`Fun Commands`,"`8ball` `cat` `coinflip` `dog`")
    .addField(`NSFW Commands`,"`4k` `amateur` `asian` `ass` `bbw` `boobs` `cosplay` `dick` `dickpick` `gif` `hentai` `milf` `penis` `public` `pussy` `rule34` `snapchat` `uniform`")
    .setFooter(`Prefix: ${JSON.stringify(prefix)} | This bot is still under construction`)
    .setTimestamp()
    message.channel.send(embed)
    message.author.send(embed)
  } else {
    console.log("Add in description")
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['h'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'help',
    description: 'Lists all commands',
    usage: '8ball [question]'
};