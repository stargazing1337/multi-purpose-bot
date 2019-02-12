const Discord = require('discord.js')
const client = new Discord.Client();

const prefix = '!'

client.on('ready',() => { // When bot is ready
  console.log('Bot is ready with username: ' + client.user.username) // Log when bot is ready
  client.user.setActivity(`people type !help`, {type: "WATCHING"});
});

client.on('message', (message) => { // When message is recieved
  
  if(message.author.bot) return // If the author is a bot exit code
  if (!message.content.startsWith(prefix)) return; // If the message doesnt start with the prefix exit code
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g); // Define args
  const command = args.shift().toLowerCase(); // Define command

  if(command === "ping") { // Command ping
    var pong = `It took ` + Math.round(client.ping) + `ms to ping.`
    const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .addField(`Pong!`, pong)
    message.channel.send({embed: embed})    
  }
  
  if (command === "help") {  
    const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .setTitle(`Help Menu`)
    .addField(`Info Commands`, "`help` `about` `ping`")
    .addField(`Admin Commands`,"`help` `about` `ping`")
    .setFooter("Prefix: ! | This bot is still under construction")
    .setTimestamp()
    message.channel.send(embed)    
  }
  
  let totalSeconds = (client.uptime / 1000);
  //let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.round(totalSeconds % 60);
  let uptime = `${hours} hrs ${minutes} mins ${seconds} secs`;
  
  if (command === "about") {
    const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .addField(`Version`, `1.0`, true)
    .addField(`Node JS`, `8.x`, true)
    .addField(`Library`, `[discord.js](https://discord.js.org/#/)`, true)
    .addField(`Uptime`, `${uptime}`, true)
    .addField(`Servers`, `${client.guilds.size}`, true)
    .addField(`Users`, `${client.users.size}`, true)
    .addField(`Website`, `[Not available yet]`, true)
    .addField(`Discord`, `[Not available yet]`, true)
    .addField(`Invite`, `[Not available yet]`, true)
    .addField(`Developer`, `Kotobro#5754`, true)
    .setFooter("Prefix: ! | This bot is still under construction")
    .setTimestamp()
    message.channel.send(embed)    
  }
  
    // Purge
    if (command.startsWith('prune')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function prune() {
            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            //if (!message.member.roles.find("name", "Owner")) { // This checks to see if they DONT have it, the "!" inverts the true/false
            //    message.channel.send('You need the \`bot-commander\` role to use this command.'); // This tells the user in chat that they need the role.
            //    return; // this returns the code, so the rest doesn't run.
           // }

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'prune <amount>'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.
        prune(); // Make sure this is inside the if(msg.startsWith)

    }
  
})
client.login(process.env.TOKEN); // Never show your token bruh