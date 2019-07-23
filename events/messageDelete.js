//
//  messageDelete.js
//  UserBot
//
//  Created by TotallyNotNero on 12/22/18.
//  Copyright © 2018 - 2019 TotallyNotNero. All rights reserved.
//


const config = require("../Configuration/config.json");
const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = async (msg, oldmsg) => {
    if(msg.guild.id === "402906632214020106") return;
    const logchannelFind = msg.guild.channels.find(`name`, `logs`)
    logchannelFind.send("Message Deleted: ```" + msg + "```")
    if(!logchannelFind) {
        return;
    }
}
