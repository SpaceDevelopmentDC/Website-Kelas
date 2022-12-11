const f = require("node-fetch")

module.exports = {
  name: "duck",
  run: async(req, res) => {
    const y = await f(`https://random-d.uk/api/v2/random`)
    const z = await y.json()

    res.json({
      image: z.url,
    })
  }
}

// const f = require("node-fetch");
// const Canva = require("canvas");

// module.exports = {
//   name: "duck",
//   run: async(req, res) => {
//     const img = await Canva.loadImage(`https://random-d.uk/api/v2/random`);
//     const canvas = Canva.createCanvas(img.width, img.height);
//     const ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
//     res.set({ 'Content-Type': 'image/png' })
//     res.send(canvas.toBuffer())
//   }
// }