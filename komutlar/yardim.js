const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('#000000')
.setTitle('» Komut Grupları')
.setTimestamp()
.addField('» Eğlence Komutları', '-eğlence')
.addField('» Moderatör Komutları', '-moderator')
.addField('» Genel Komutlar', '-genel')
.setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['yardim'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};