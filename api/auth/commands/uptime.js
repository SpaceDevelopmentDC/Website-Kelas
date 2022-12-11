const { Message, Client } = require("discord.js");

module.exports = {
  name: "uptime",
  category: '🌍 Utilities',
  run: async (client, message, args) => {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let newm;
    if(minutes == 0){
      newm = `🔔 I've been up for **${seconds} seconds**!`
    } else if(hours == 0){
      newm = `🔔 I've been up for **${minutes} minutes**!`
    } else if(days == 0){
      newm = `🔔 I've been up for **${hours} hours**!`
    } else {
      newm = `🔔 I've been up for **${days} days**!`
    }
    return message.channel.send(`${newm}`)
  },
};