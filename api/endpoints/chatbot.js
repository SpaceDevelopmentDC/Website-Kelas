const f = require("node-fetch");
const c = require("cleverbot-free");

module.exports = {
  name: "chatbot",
  run: async(req, res) => {
    let msg = req.query.msg;
    if(!msg) return res.json({ error: "You need to provide a message!" })


    c(msg).then(x => res.json({ reply: x }));
    // let uid = req.query.uid;
    // if(!uid) return res.json({ error: "You need to provide a uid!" })

    // f(`http://api.brainshop.ai/get?bid=163227&key=n1GqvFrBFn2v7SxF&uid=${uid}&msg=${msg}`)
    // .then(z => z.json())
 	  // .then(x => {
    //   res.json({ reply: x.cnt })
    // })
  }
}