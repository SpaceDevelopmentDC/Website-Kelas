const f = require("node-fetch")
const Canva = require("canvas")

module.exports = {
  name: "greyscale",
  run: async(req, res) => {
    let img1 = req.query.avatar;
    if(!img1) return res.json({ error: "You must provide an avatar to grey scale!" })

    try {
      const img = await Canva.loadImage(img1);
      const canvas = Canva.createCanvas(img.width, img.height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "color";
      ctx.fillStyle = "grey";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      res.set({ 'Content-Type': 'image/png' })
      res.send(canvas.toBuffer())
    } catch(e) {
      console.log(e)
      return res.json({ error: "Invalid image format provide, we recommend you use .png!"})
    }
  }
}