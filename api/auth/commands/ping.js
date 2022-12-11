const { Message, Client } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ['p'],
  category: '🌍 Utilities',
  run: async (client, message, args) => {
    let msg = await message.channel.send({ content: `**🛎 Ping?**` })
    
    return msg.edit({ content: `**🛎 Pong!** It took me ${msg.createdTimestamp - message.createdTimestamp}ms to get back to you!` })
  },
};