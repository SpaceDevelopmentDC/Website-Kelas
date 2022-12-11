const f = require("node-fetch");
const Canva = require("canvas");

module.exports = {
  name: "dog",
  run: async(req, res) => {
    const img = await Canva.loadImage(`https://thedogapi.com/api/images/get?format=src&type=png`);
    const canvas = Canva.createCanvas(img.width, img.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
    res.set({ 'Content-Type': 'image/png' })
    res.send(canvas.toBuffer())
  }
}