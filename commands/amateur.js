const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    var subreddits = [
        'RealGirls',
        'amateur',
        'gonewild'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`amateur.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlink(`./amateur.jpg`)
            })
        })
}

module.exports.help = {
  name: "amateur"
}