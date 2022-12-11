const Canva = require('canvas')

module.exports = {
  name: "image/color",
  run: async(req, res) => {
    let given_hex = req.query.q;
    if(!given_hex) return res.json({ error: "You need to provide text to put on the image!" })

    let x = /^#[0-9A-F]{6}$/i.test(`#${given_hex}`)
    if(x === false) return res.json({ error: "Invalid HEX Code/color!" })

    const canvas = Canva.createCanvas(500, 500);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = `#${given_hex}`
    ctx.fillRect(0,0,canvas.width, canvas.height);
      
    res.set({ 'Content-Type': 'image/png' })
    res.send(canvas.toBuffer())
  }
}