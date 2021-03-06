const Discord = require("discord.js")
const ms = require("ms")

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send(":x: Yapmak İçin `Kick Members` Yetkisine Sahip Olmalısın.")
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('RED').setAuthor("Hata").setDescription(`🎈 Kullanıcı Bulunamadı`))
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!user.roles.find(`name`, "Susturulmuş")) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('RED').setTitle('🎈 Kişi Mutelenmemiş'))
    let muterole = message.guild.roles.find(`name`, "Susturulmuş");

    if (!muterole) {
        try {
           muterole = await message.guild.createRole({
                name: "Susturulmuş",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }



     await (user.removeRole(muterole.id));
    message.reply(`🌀 Kullanıcının <@${user.id}> mutesi kalkmıştır`)
}


exports.conf = {
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: "unmute",
    description: "Etiketlenen Kişinin Mutesini Geri Alır",
    usage:  "unmute [kullanıcı] [sebep]",
}
