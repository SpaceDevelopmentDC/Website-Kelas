const f = require("node-fetch")
const Canva = require("canvas")

module.exports = {
  name: "screenshot",
  run: async(req, res) => {
    let x = req.query.url;
    if(!x) return res.json({ error: "Provide a url to screenshot!" })
    
    const img = await Canva.loadImage(`https://api-fg.ddns.net/api/v3/news/screenshot?url=${x}`);
    const canvas = Canva.createCanvas(1920, 1080);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
    res.set({ 'Content-Type': 'image/png' })
    res.send(canvas.toBuffer())
  }
}