/*  
    ð   >>    CODE IS OWNED BY AZURYÂ©    <<   ð  
    ð   >>     CODED BY hace â#0001     <<   ð 
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
*/

const { red, green, yellow, blue, magenta, cyan, white, gray, black } = require("chalk")
const client = require("../endpoints/auth_new")
const f = require("node-fetch")
const { MessageEmbed, Collection } = require("discord.js")
const fs = require("fs");

/*  ð:ð¥  >>    GLOBAL CLIENT VARIABLES    <<  ð¥:ð  */
client.prefix = "-"
client.cmds   = new Collection()

const commands = fs.readdirSync("./api/auth/commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/${file}`);
  client.cmds.set(command.name, command);
}

/*  ð:ð   >>    CLIENT USER EVENTS    <<   ð:ð  */
client.on("ready", () => {
  client.user.setActivity(`azury.live ðð`, {type:'WATCHING'})
  client.user.setStatus('idle')
})

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.guild) return;

  if(message.content.toLowerCase() == 'helo') return message.reply('ð hello!')

  if (message.content.indexOf(client.prefix) !== 0) return;
  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.cmds.get(command);
  if (!cmd) return;
  cmd.run(client, message, args);
})

  // if(message.content.toLowerCase() == '-ping'){
  //   let msg = await message.channel.send({ content: `**ð Ping?**` })
  //   return msg.edit({ content: `**ð Pong!** It took me ${msg.createdTimestamp - message.createdTimestamp}ms to get back to you!` })
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
  //     newm = `ð I've been up for **${seconds} seconds**!`
  //   } else if(hours == 0){
  //     newm = `ð I've been up for **${minutes} minutes**!`
  //   } else if(days == 0){
  //     newm = `ð I've been up for **${hours} hours**!`
  //   } else {
  //     newm = `ð I've been up for **${days} days**!`
  //   }
  //   return message.channel.send(`${newm}`)
  // } else if(message.content.toLowerCase() == '-colour'){
  //   let v = await f(`https://api.azury.live/randomcolor`) 
  //   let x = await v.json()

  //   let emb = new MessageEmbed()
  //   .setTitle(`ð¨ Random Colour`)
  //   .setColor(x.hex)
  //   .setDescription(`This color is **${x.hex}**`)
  //   .addFields([
  //     { name: `Colour Name`, value: `${x.name}`, inline: true }
  //   ])
  //   return message.channel.send({ embeds: [emb] })
  // }


/*  ð:ð   >>    DATABASE CONNECTION   <<   ð:ð  */
// mongoose.connect(client.config.mongooseConnectionString, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// })


/*  ð:ð   >>    CONSOLE LOG EVENTS    <<   ð:ð  */
console.log(white(`ââââââââââââââââââââââââââââââââââââââââââââââ`))
console.log(white(`ââââNEW CLIENT:  ${client.user.tag}  [API]ââââ`))
console.log(white(`ââââââââââââââââââââââââââââââââââââââââââââââ`))