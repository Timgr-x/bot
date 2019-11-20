const Discord = require('discord.js');
const moment = require('moment')
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
   const embed = new Discord.RichEmbed()
   .setColor("GREEN")
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL)
   .addField('Üyeler:', `Toplam: ${message.guild.memberCount}\nBot: ${message.guild.members.filter( member => member.user.bot).size}`, true)
   .addField('Bölgesi:', message.guild.region, true)
   .addField('Rol sayısı:', `Toplam: ${message.guild.roles.size}`, true)
   .addField('Kanal sayısı:', `Toplam: ${message.guild.channels.filter (Kanal => Kanal.type !== 'category').size}`, true)
   .addField('Kanallar:', `Yazi: ${message.guild.channels.filter (Kanal => Kanal.type !== 'category').size}\nSesli: ${message.guild.channels.filter(x=>x.type == "voice").size}`, true)
   .addField('AFK kanalı:', message.guild.afkChannel, true)
   .addField('AFK zaman aşımı:', message.guild.afkTimeout, true)
   .addField('Oluşturma tarihi:', `${moment(message.guild.createdTimestamp).format('YYYY/MM/DD HH:mm')}`, true)
   .addField('Sahibi:', message.guild.owner, true)
   .addField('Roller:', message.guild.roles.map(role => role).join('| |').replace("@everyone", " "), true)
   .setFooter('Sunucunun Bilgileri', message.guild.iconURL)
   .setTimestamp()
   message.channel.send({embed});
 };

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['sunucubilgi'],
   permLevel: 2
 };

 exports.help = {
   name: 'scbilgi',
   description: 'Kullanılan Yerdeki Sunucu Bilgilerini Gösterir.',
   usage: 'scbilgi'
 };
