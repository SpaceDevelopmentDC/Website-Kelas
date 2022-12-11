const f = require("node-fetch")
const Canva = require('canvas')
const Color = require('color')
let randomColor = () => Math.floor(Math.random()*16777215).toString(16);

module.exports = {
  name: "randomcolor",
  run: async(req, res) => {
    let given_hex = randomColor()
    let brightColor = Color(`#${given_hex}`).lighten(0.5);
    brightColor = brightColor.hex()
    
    try {
      f(`https://api.alexflipnote.dev/colour/${given_hex}`).then(x => x.json()).then(d => {
        let x
        x=d.rgb.replace("rgb(", "")
        x=x.replace(")", "")
        res.json({
          hex: d.hex,
          name: d.name,
          rgb: x,
          color_image: `https://api.azury.live/image/color?q=${given_hex}`,
          brightened: brightColor
        })
      })
    } catch(e) {
      console.log(e)
      res.json({ error: "Invalid hex code!" })
    }
  }
}