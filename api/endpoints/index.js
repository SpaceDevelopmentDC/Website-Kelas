const { red, green, yellow, blue, magenta, cyan, white, gray, black } = require("chalk")
const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/932031444149215322/-zqCbImX51hp80lXed-uV_GPsNDRT56ZqMFejqcj_UHXjx99rjJmyCIlpIXG3Ytd55k4");
const fs = require("fs")
const x = new Date()


const rateLimiter = require('express-rate-limit')({
  windowMs: 3000,
  max: 2,
  headers: true,
  handler: function(req, res) {
    const reqDate = new Date() - x
    const emb = new MessageBuilder()
    .setTitle(`<:Denied:930607627027759145> API RATELIMITER [${req.url}]`)
    .setColor('#ff88d2')
    .addField(`RMS`, `\`${reqDate}\``, true)
    .addField(`PUBLIC`, `${req.client._peername.port}`, true)
    .addField(`REQUESTS`, `\`${req.rateLimit.current}\``, true)
    hook.send(emb)

    console.log('RATELIMIT >> ' + req.originalUrl.split('/')[1]);
    res.status(429).json({
      statusCode: 429,
      error: {
        message: 'You are Ratelimited!',
        limitedUntil: req.rateLimit.remaining + ' Remaining Requests after unblock',
        currentReq: req.rateLimit.current + ' Current Requests made'
      },
      dev: {
        stack: '👻',
        time: new Date().toLocaleDateString() + ' | ' + new Date().toLocaleTimeString()
      }
    });
  }
});

module.exports = function (app){
  fs.readdirSync(__dirname).forEach(function(file){
    if(file === "index.js") return;
    let name = file.substr(0, file.indexOf("."));
    const route = require(`./${name}`);
    app.get(`/${route.name}`, rateLimiter, async(req, res) => {
      const reqDate = new Date() - x

      // const emb = new MessageBuilder()
      // .setTitle(`<:Accepted:930607208327155763> SUCCESSFUL API GET: \`${req.url}\``)
      // .setColor('#ffcc5c')
      // .addField(`RMS`, `\`${reqDate}\``, true)
      // .addField(`STATUS`, `\`200\``, true)
      // .addField(`PUBLIC`, `${req.client._peername.port}`, true)
      // hook.send(emb)

      console.log(green("GET"), blue(req.url), magenta("200"), yellow(reqDate))
      route.run(req, res);
    });
  })
};