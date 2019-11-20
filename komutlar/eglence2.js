const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('#000000')
      .setTitle('🎈 R.O.T.A Eğlence', 'https://cdn.discordapp.com/icons/495518657636466699/fe32292c20436738c71339e0cc9b6217.png?size=128')
        .setThumbnail('https://cdn.discordapp.com/icons/495518657636466699/fe32292c20436738c71339e0cc9b6217.png?size=128')
        .addField('💎 Eğlence.', '-şanslısayım\n-stresçarkı\n-tkm')
        .addField("Sayfa 2/2 Önceki sayfaya keçmek için", "-eğlence")
        .setImage('https://cdn.discordapp.com/icons/495518657636466699/fe32292c20436738c71339e0cc9b6217.png?size=128')
        .setTimestamp()
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  )
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['eglence'],
  permLevel: 0
}

exports.help = {
  name: 'eğlence',
  description: 'emable yardim',
  usage: 'eğlence'
}