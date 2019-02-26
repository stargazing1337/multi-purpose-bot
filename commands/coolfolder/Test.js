const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
  //insert code here
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['t', 'temp'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'doo',
    description: 'Template for commands.',
    usage: '!template'
};