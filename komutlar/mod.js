const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('#000000')
      .setTitle('⚔️ R.O.T.A Moderasyon', 'https://cdn.discordapp.com/icons/495518657636466699/fe32292c20436738c71339e0cc9b6217.png?size=128')
        .setThumbnail('https://cdn.discordapp.com/icons/495518657636466699/fe32292c20436738c71339e0cc9b6217.png?size=128')
        .addField('🛡 Moderasyon.', '-sil `miktar`\n-mute `@üye`\n-unmute `@üye`\n-sunucubilgi\n-ban `@üye` `sebeb`\n-unban `@üye` `sebeb`\n-sunucu-sıfırla\n-sunucumesaj\n-kullanıcı-bilgi\n-sunucu-kur\n-slowmode `süre`\n-herkeserolver `@rol`\n-herkestenrolal `@rol`\n-botbilgi\n-kanalbilgi')
        .addField("Sayfa 1/2 Diğer sayfaya keçmek için ", "-moderasyon2")
        .setImage('https://cdn.discordapp.com/icons/495518657636466699/fe32292c20436738c71339e0cc9b6217.png?size=128')
        .setTimestamp()
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  )
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mod'],
  permLevel: 0
}

exports.help = {
  name: 'moderasyon',
  description: 'emable yardim',
  usage: 'moderasyon'
}