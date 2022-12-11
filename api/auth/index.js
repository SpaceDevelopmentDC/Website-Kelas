/*  
    🎓   >>    CODE IS OWNED BY AZURY©    <<   🎓  
    🎓   >>     CODED BY hace ✌#0001     <<   🎓 
────────────────────────────────────────────────────────────────────────────────────────────
*/

const { red, green, yellow, blue, magenta, cyan, white, gray, black } = require("chalk")
const client = require("../endpoints/auth_new")
const f = require("node-fetch")
const { MessageEmbed, Collection } = require("discord.js")
const fs = require("fs");

/*  🍍:🍥  >>    GLOBAL CLIENT VARIABLES    <<  🍥:🍍  */
client.prefix = "-"
client.cmds   = new Collection()

const commands = fs.readdirSync("./api/auth/commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/${file}`);
  client.cmds.set(command.name, command);
}

/*  🍍:🍄   >>    CLIENT USER EVENTS    <<   🍄:🍍  */
client.on("ready", () => {
  client.user.setActivity(`azury.live 🍍🍄`, {type:'WATCHING'})
  client.user.setStatus('idle')
})

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.guild) return;

  if(message.content.toLowerCase() == 'helo') return message.reply('👋 hello!')

  if (message.content.indexOf(client.prefix) !== 0) return;
  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.cmds.get(command);
  if (!cmd) return;
  cmd.run(client, message, args);
})

  // if(message.content.toLowerCase() == '-ping'){
  //   let msg = await message.channel.send({ content: `**🛎 Ping?**` })
  //   return msg.edit({ content: `**🛎 Pong!** It took me ${msg.createdTimestamp - message.createdTimestamp}ms to get back to you!` })
  // } else if(message.content.toLowerCase() == '-uptime'){
  //   let totalSeconds = (client.uptime / 1000);
  //   let days = Math.floor(totalSeconds / 86400);
  //   totalSeconds %= 86400;
  //   let hours = Math.floor(totalSeconds / 3600);
  //   totalSeconds %= 3600;
  //   let minutes = Math.floor(totalSeconds / 60);
  //   let seconds = Math.floor(totalSeconds % 60);

  //   let newm;
  //   if(minutes == 0){
  //     newm = `🔔 I've been up for **${seconds} seconds**!`
  //   } else if(hours == 0){
  //     newm = `🔔 I've been up for **${minutes} minutes**!`
  //   } else if(days == 0){
  //     newm = `🔔 I've been up for **${hours} hours**!`
  //   } else {
  //     newm = `🔔 I've been up for **${days} days**!`
  //   }
  //   return message.channel.send(`${newm}`)
  // } else if(message.content.toLowerCase() == '-colour'){
  //   let v = await f(`https://api.azury.live/randomcolor`) 
  //   let x = await v.json()

  //   let emb = new MessageEmbed()
  //   .setTitle(`🎨 Random Colour`)
  //   .setColor(x.hex)
  //   .setDescription(`This color is **${x.hex}**`)
  //   .addFields([
  //     { name: `Colour Name`, value: `${x.name}`, inline: true }
  //   ])
  //   return message.channel.send({ embeds: [emb] })
  // }


/*  🍍:🍈   >>    DATABASE CONNECTION   <<   🍈:🍍  */
// mongoose.connect(client.config.mongooseConnectionString, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// })


/*  🍍:🍉   >>    CONSOLE LOG EVENTS    <<   🍉:🍍  */
console.log(white(`──────────────────────────────────────────────`))
console.log(white(`    NEW CLIENT:  ${client.user.tag}  [API]    `))
console.log(white(`──────────────────────────────────────────────`))