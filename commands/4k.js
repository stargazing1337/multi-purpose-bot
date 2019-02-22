const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
    var subreddits = [
        'NSFW_Wallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`4k.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlink(`./4k.jpg`)
            })
        })
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: '4k',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};