const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('#000000')
      .setTitle('⚔️ R.O.T.A Moderasyon', 'https://cdn.discordapp.com/icons/495518657636466699/fe32292c20436738c71339e0cc9b6217.png?size=128')
        .setThumbnail('https://cdn.discordapp.com/icons/495518657636466699/fe32292c20436738c71339e0cc9b6217.png?size=128')
        .addField('🛡 Moderasyon.', '-sunucusil\n-rol-bilgi `@rol`\n-kategori-oluştur `ismi`\n-metin-kanal-aç `ismi`\n-ses-kanal-aç `isim`\n-kanal `aç/kapat`\n-id `@üye`\n-otorol @rol\n-kanalismideğiş `#kanal` `isim`\n-embedyaz `mesaj`\n-edit `botun mesaj id` `mesaj`\n-seslidesustur `@üye`-sağırlaştır `@üye`\n-duyuru `kanal` `mesaj`')
        .addField("Sayfa 2/2 Önceki sayfaya keçmek için", "-moderasyon")
        .setImage('https://cdn.discordapp.com/icons/495518657636466699/fe32292c20436738c71339e0cc9b6217.png?size=128')
        .setTimestamp()
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  )
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mod2'],
  permLevel: 0
}

exports.help = {
  name: 'moderasyon2',
  description: 'emable yardim',
  usage: 'moderasyon2'
}