const express = require("express")
const app = express()
const { red, green, blue, magenta, cyan, white, gray, black } = require("chalk");

/*・・・〢   ROUTES   〢・・・*/
require("./api/endpoints")(app)
console.log(magenta("[🪐 API]  Route handler loaded"))

app.use("/", require("./website/routers/index.js"))
console.log(cyan("[🌍 SITE] Website is up"))

let port = 5000;
app.listen(port, (x) => console.log(magenta("[🪐 API]  System is running")))
console.log(magenta(`[🪐 PORT] Listening to.. *${port}*`))
app.set('json spaces', 1);



/*           ANTI CRASHING            ¦¦           ANTI CRASHING           */ 
const colors = require("colors")
process.on('unhandledRejection', (reason, p) => {
  console.log('\n\n\n\n\n・・〢 unhandled Rejection 〢・・'.toUpperCase().yellow.dim);
  console.log('Reason: ', reason.stack ? String(reason.stack).gray : String(reason).gray);
  console.log('・・〢 unhandled Rejection 〢・・\n\n\n\n\n'.toUpperCase().yellow.dim);
});
process.on("uncaughtException", (err, origin) => {
  console.log('\n\n\n\n\n\n・・〢 uncaught Exception 〢・・'.toUpperCase().yellow.dim);
  console.log('Exception: ', err.stack ? err.stack : err)
  console.log('・・〢 uncaught Exception 〢・・\n\n\n\n\n'.toUpperCase().yellow.dim);
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log('・・〢 uncaught Exception Monitor 〢・・'.toUpperCase().yellow.dim);
});
process.on('beforeExit', (code) => {
  console.log('\n\n\n\n\n・・〢 before Exit 〢・・'.toUpperCase().yellow.dim);
  console.log('Code: ', code);
  console.log('・・〢 before Exit 〢・・\n\n\n\n\n'.toUpperCase().yellow.dim);
});
process.on('exit', (code) => {
  console.log('\n\n\n\n\n・・〢 exit 〢・・'.toUpperCase().yellow.dim);
  console.log('Code: ', code);
  console.log('・・〢 exit 〢・・\n\n\n\n\n'.toUpperCase().yellow.dim);
});
process.on('multipleResolves', (type, promise, reason) => {
  console.log('\n\n\n\n\n・・〢 multiple Resolves 〢・・'.toUpperCase().yellow.dim);
  console.log(type, promise, reason);
  console.log('・・〢 multiple Resolves 〢・・\n\n\n\n\n'.toUpperCase().yellow.dim);
});