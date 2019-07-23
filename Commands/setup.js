//
//  About.js
//  UserBot
//
//  Created by TotallyNotNero on 12/22/18.
//  Copyright © 2018 - 2019 TotallyNotNero. All rights reserved.
//


const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
   // --EMBEDS--
    const noPerms = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setDescription(`:no_entry_sign: ${msg.author.username}, you don't have the pemission to run this command`)
        .setColor(0xff0000)
        .setFooter(`Contact your server admin for help is you belive this isn't right`)

    if(!msg.member.roles.some(r=>["Staff"].includes(r.name)) ) return msg.channel.send(noPerms);
    console.log("I'm configuring a server!")
}
