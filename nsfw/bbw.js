const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    var subreddits = [
        'BBW',
        'BBWnudists',
        'BBW_Chubby'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`BBW.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlink(`./BBW.jpg`)
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
    name: 'bbw',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};