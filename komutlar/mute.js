const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send(":x: Komudu Kullanmak İçin Kick Members Yetkisine Sahip Olmalısın.")
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send(`🎈 Kullanıcıyı Bulamıyorum`)
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('RED').setTitle('🎈 Mute Sebebini Yazman Gerek'))
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

    await (user.addRole(muterole.id));
message.reply(`🌀 Kullanıcı <@${user.id}> başarıyla susturuldu`)
  
  
}


exports.conf = {
    aliases: ['sustur'],
    permLevel: 2
};

module.exports.help = {
    name: "mute",
    description: "Etiketlenen Kişiye Mute Atar",
    usage: "mute [kullanıcı] [sebep]"
}