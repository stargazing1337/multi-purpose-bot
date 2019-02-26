const errors = require("...../utils/errors.js");

exports.run = async (client, message, args, con) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
	let mention = message.mentions.users.first();
	let amount;
	if(mention) {
		amount = 100
	} else {
		amount = parseInt(args[0]);
		if(!amount || amount < 1 && amount < 100) return message.channel.send("Usage: !prune <# between 1 and 100>");
		amount = Math.min(amount + 1, 100);
	}

	try {
		let messages = await message.channel.fetchMessages({limit: amount});
		messages = messages.filter(m => m.createdTimestamp >= Date.now() - 1179360000);
		let mention = message.mentions.users.first();
		if(mention) messages = messages.filter(m => m.author.id === mention.id || m.content === message.content);
		let pruned = messages.size;
		if(pruned < 1) return message.channel.send("No prune-able messages were found.");
		await message.channel.bulkDelete(messages);
		
		message.channel.send(`:wastebasket:  |  Prune successful. Deleted ${pruned === amount ? pruned - 1 : pruned} messages.`).then(m => m.delete(5000));
	} catch(e) {
		message.channel.send(`Prune failed: ${e.message}`);
	}
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pru'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'prune',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};