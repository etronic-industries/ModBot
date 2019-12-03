const Discord = require("discord.js");
const config = require("../Configuration/config.json");
const ms = require("ms")

module.exports = async(bot, msg, args) => {
    let muteUser = msg.mentions.members.first() || msg.guild.members.get(args[0]);
    let reason = args.slice(2).join(" ");
    let mutetime = args[1];
    let muterole = msg.guild.roles.find(role => role.name === "Muted")

    // EMBEDS
    const noPerms = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setDescription(`:no_entry_sign: ${msg.author.username}, you don't have the pemission to run this command`)
        .setColor(0xff0000)
        .setFooter(`Contact your server admin for help is you believe this isn't right`)
    // ---------------------------------------------------
    const missingArgument_User = new Discord.RichEmbed()
        .setTitle(`Oops! :scream:`)
        .setDescription(`You're a missing a required argument (muteUser) in your message. The command can't continue without this, please add it and try again`)
        .setColor(0xff0000)
        .setFooter(`Contact a developer if you believe this is a mistake and the argument was entered`)
    // ---------------------------------------------------
    const missingArgument_Reason = new Discord.RichEmbed()
        .setTitle(`Oops! :scream:`)
        .setDescription(`You're a missing a required argument (reason or time) in your message. The command can't continue without this, please add it and try again`)
        .setColor(0xff0000)
        .setFooter(`Contact a developer if you belive this is a mistake and the argument was entered`)
    // ---------------------------------------------------
    const missingArgument_Time = new Discord.RichEmbed()
    .setTitle(`Oops! :scream:`)
    .setDescription(`You're a missing a required argument (time) in your message. The command can't continue without this, please add it and try again`)
    .setColor(0xff0000)
    .setFooter(`Contact a developer if you believe this is a mistake and the argument was entered`)
    // ---------------------------------------------------
    const userMuted = new Discord.RichEmbed()
    .setTitle(`Oops! :scream:`)
    .setDescription(`The mentioned user is already muted!`)
    .setColor(0xff0000)
    .setFooter(`Contact a developer if you believe this is a mistake and the user is not muted`)
    // ================================ END OF EMBEDS SECTION =====================================

    if(!msg.member.roles.some(r=>["Staff"].includes(r.name)) ) return msg.channel.send(noPerms);
    if (msg.mentions.users.size < 1) return msg.channel.send(missingArgument_User)
    if (reason.length < 1) return msg.channel.send(missingArgument_Reason)
    if(!muterole){
        try{
            muterole = msg.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
    
            })
            msg.guild.channels.forEach(async (channel, id) => {
                channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack);
        }
    }
    if(msg.guild.member(muteUser).roles.has(muterole.id)) return msg.channel.send(userMuted);

    const embed1 = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setDescription(`**${muteUser.user.username}** has been muted. \n Time: ${ms(ms(mutetime))} \n Reason: ${reason}`)
    .setColor(0x00ff00)

    msg.channel.send(embed1)

    await muteUser.send({
        embed: {
        color: 0xFF0000,
        title: "Uh oh! :scream:",
        description: `You've been muted in **${msg.guild.name}** by **${msg.author.username}** for **${ms(ms(mutetime))}** with the reason **${reason}**`
        }
    })

    muteUser.addRole(muterole.id);
    
    setTimeout(function(){
        muteUser.removeRole(muterole.id);
        msg.guild.member(muteUser).send("You have been unmuted");
        msg.channel.send(`${muteUser.user.username} has been unmuted - duration passed`)
    }, ms(mutetime));
}
