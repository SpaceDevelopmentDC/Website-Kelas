const f = require("node-fetch");
const Canva = require("canvas");

module.exports = {
  name: "auth/*/getid",
  run: async(req, res) => {
    let client = new Discord.Client({ intents: [] })
    client.login(token).then(async () => {
      client.destory()
    }).catch((err) => {
      if((err.message !== "Incorrect login details were provided.") && (err.message !== "An invalid token was provided.")) return res.send({ error: `KEY is invalid!`})
      client.destroy();
    });
  }
}