const f = require("node-fetch")
const Canva = require("canvas")

module.exports = {
  name: "map",
  run: async(req, res) => {
    let x = req.query.q;
    if(!x) return res.json({ error: "Please provide a query [?q=] of a location to serach for on google maps!" })
    
    const img = await Canva.loadImage(`https://api-fg.ddns.net/api/v3/news/screenshot?url=https://www.google.com/maps/search/${x}`);
    const canvas = Canva.createCanvas(img.width, img.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
    res.set({ 'Content-Type': 'image/png' })
    res.send(canvas.toBuffer())
  }
}