const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermissions("DEAFEN_MEMBERS")) return message.channel.send(":no_entry: Bu komutu kullanabilmek için `Üyeleri sağırlaştır` yetkisine sahip olmanız gerek.")
    let kullanici = message.mentions.members.first()
    if (!kullanici) return message.channel.send("Kimi sağırlaştıracağını belirtmedin")
    kullanici.setDeaf(true)
        .then(() =>
            message.channel.send(`${kullanici} adlı kullanıcının kulaklığı kapatıldı`))
        .catch(console.error);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kulaklık-kapat', 'kulaklıkkapat', 'k-kapat'],
    permLevel: 0
};

exports.help = {
    name: 'sağırlaştır',
    description: 'İstediğiniz kişinin sesli kanaldaki kulaklığını kapatır.',
    usage: 'sağırlaştır [kullanıcı] [sebep]'
};