const { Message, MessageEmbed, Client } = require("discord.js");
let f = require("node-fetch")

module.exports = {
  name: "colour",
  category: '🌍 Utilities',
  run: async (client, message, args) => {
    let v = await f(`https://api.azury.live/randomcolor`) 
    let x = await v.json()

    let emb = new MessageEmbed()
    .setTitle(`🎨 Random Colour`)
    .setColor(x.hex)
    .setDescription(`This color is **${x.hex}**`)
    .addFields([
      { name: `Colour Name`, value: `${x.name}`, inline: true }
    ])
    .setFooter(`${client.config.footer}`, client.user.displayAvatarURL())
    return message.channel.send({ embeds: [emb] })
  },
};