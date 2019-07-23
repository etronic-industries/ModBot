//
//  uptime.js
//  UserBot
//
//  Created by TotallyNotNero on 12/22/18.
//  Copyright © 2018 - 2019 TotallyNotNero. All rights reserved.
//


const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
        const embed = new Discord.RichEmbed()
            .setTitle(`:clock10: Uptime`)
            .setDescription(`I've been up for ` + Math.floor(bot.uptime / 60 / 60 / 60) + ` hours`)
            .setColor(0x157f87)
        
        msg.channel.send(embed)
}
