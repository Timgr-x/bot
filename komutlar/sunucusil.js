const Discord = require('discord.js');


exports.run = async (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('RED').setTitle('Komut girişi').setDescription('Sunucuyu Silmek İstiyor Musun?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 40000,
errors: ['time'],
})
.then((collected) => {
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});    
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});   
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});   

 });
});
};

exports.conf = {  
  enabled: true,
  guildOnly: false,
  aliases: ['sunucusil'],
  permLevel: 3
};

exports.help = {
  name: 'sunucu-sil',
  description: 'Sunucu sil.',
  usage: 'sunucu-sil'
};