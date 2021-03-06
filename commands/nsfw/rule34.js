const https = require("https");
const xml2js = require('xml2js');

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
    let argR = args.slice(0).join(" ")
    var url = 'https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=' + argR;

    https.get(url, function(res) {
        var body = '';

        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            var parser = new xml2js.Parser();
            parser.parseString(body, function(err, result) {
                var postCount = result.posts.$.count - 1;
                if (postCount > 100) {
                    postCount = 100;
                }
                if (postCount > 0) {
                    var picNum = Math.floor(Math.random() * postCount) + 0;
                    var r34Pic = result.posts.post[picNum].$.file_url;
                    // console.log(result.posts.post[picNum].$.file_url);
                    message.channel.send({
                        files: [r34Pic]
                    });
                } else {
                    console.log("Nothing found:", argR);
                    message.channel.send("No images found. Try different tags.");
                }
            });
        });
    }).on('error', function(e) {
        console.log("Got an error: ", e);
    });
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'rule34',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};