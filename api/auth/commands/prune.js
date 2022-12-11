const { Message, MessageEmbed, Client } = require("discord.js");
let f = require("node-fetch")

module.exports = {
  name: "prune",
  category: '🚩 Moderation',
  run: async (client, message, args) => {
    let x = args[0]
    if(!x) return message.channel.send(`How many messages to prune?`)

    let emb = new MessageEmbed()
    .setTitle(`🎨 Random Colour`)
    .setColor(x.hex)
    .setDescription(`This color is **${x.hex}**`)
    .addFields([
      { name: `Colour Name`, value: `${x.name}`, inline: true }
    ])
    return message.channel.send({ embeds: [emb] })
  },
};