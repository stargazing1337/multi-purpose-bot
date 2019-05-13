const {RichEmbed} = require("discord.js")

var api = {};
api.stockX = {};

exports.run = async (client, message, args) => {
    if (command == "stockx") {
        if (args[0].includes("stockx.com")) {
            api.stockX.url("https://stockx.com/api/products/" + args[0].split("/")[3] + "?includes=market,360", (data) => {
                if (data.s) {
                    //success
                    api.Notification(data.data, message);
                } else {
                    //failure
                    message.channel.send("Sorry, I couldn't get the requested resource!");
                }
            });
        } else {
            api.stockX.keywords(args, (data) => {
                if (data.s) {
                    //success
                    api.Notification(data.data, message);
                } else {
                    //failure
                    message.channel.send("Sorry, I couldn't get the requested resource!");
                }
            });
        }
    } else {
        message.channel.send("Invalid command, make sure you are using '!stockx' as the prefix.");
    }

});

exports.conf = {
    //enabled: false,
   // guildOnly: false,
    aliases: ['8'],
   // permLevel: 0
  };
  
  exports.help = {
    name: 'stockx',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};