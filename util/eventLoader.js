//
//  eventLoader.js
//  UserBot
//
//  Created by TotallyNotNero on 12/22/18.
//  Copyright © 2018 - 2019 TotallyNotNero. All rights reserved.
//

const reqEvent = (event) => require(`../events/${event}`)
module.exports = bot => {
    bot.on("message", reqEvent("message"));
    bot.on("messageDelete", reqEvent("messageDelete"));
}
