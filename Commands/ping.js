//
//  ping.js
//  UserBot
//
//  Created by TotallyNotNero on 12/22/18
//  Copyright © 2018 - 2019 TotallyNotNero. All rights reserved.
//


const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setDescription(`:ping_pong: **${bot.user.username}** v${config.version} by TotallyNotNero#0420, serving ${bot.users.size} users and ${bot.guilds.size} servers`)
        .setFooter(`${bot.user.username} v${config.version}`)
        .setColor(0x00ff05)

    msg.channel.send(embed)
}
