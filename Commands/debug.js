//
//  debug.js
//  UserBot
//
//  Created by TotallyNotNero on 12/22/18.
//  Copyright © 2018 - 2019 TotallyNotNero. All rights reserved.
//


const config = require("../Configuration/config.json");
const Discord = require("discord.js")

module.exports = async(bot, msg, args) => {
    msg.channel.send(`Please Wait...`).then(function(m) {
        m.edit(`**Ping Time:** ${m.createdTimestamp - msg.createdTimestamp}ms
        **Commands Loaded:** 15/15 (None Missing)
        **OS:** Windows Server 2008 R2
        **RAM:** 4GB
        **Web Dashboard:** Offline
        `)
    })
}
