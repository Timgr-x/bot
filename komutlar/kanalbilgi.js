const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (client, message, args) => {
  const ok = message.client.emojis.get("");
           var embed = new Discord.RichEmbed()
                .setAuthor('#' + message.channel.name, message.guild.iconURL)
                .addField(" ID", message.channel.id)
                if (message.channel.nsfw) {
                    embed.addField(" Uygunsuz İçerik", "🔞 Var", true)
                }
                else {
                    embed.addField(" Uygunsuz İçerik", ":x: Yok", true)
                }
                embed.addField('Oluşturulduğu Tarih:', moment(message.channel.createdAt).format('DD/MM/YYYY'), true)
               .setColor('RED')
                .setThumbnail(message.guild.iconURL)
                .setFooter('Kanal Bilgi', client.user.avatarURL)
            message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kanal-bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'kanalbilgi',
  description: 'Kanal ile ilgili bilgi verir.',
  usage: 'kanalbilgi'
}
