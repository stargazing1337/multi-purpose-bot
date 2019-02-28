

exports.run = (client, message, args) => {
if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

var query = args.slice(0).join(" ");
const Discord = require("discord.js")
const booru = require('booru');
booru.search('safebooru', [query], {
        limit: 1,
        random: true
    })
    .then(booru.commonfy)
    .then(images => {
        for (let image of images) {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`safebooru ${query}`)
                .setDescription(`[Image URL](${image.common.file_url})`)
                .setImage(image.common.file_url)
                .setColor('#E89F3E');
            return message.channel.send({
                embed
            });
        }
    }).catch(err => {
        if (err.name === 'booruError') {
            return message.channel.send(`No results found for **${query}**!`);
        } else {
            return message.channel.send(`No results found for **${query}**!`);
        }
    })
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'e621',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};