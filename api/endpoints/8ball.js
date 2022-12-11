const x = require("../assets/8ball")

module.exports = {
  name: "8ball",
  run: async(req, res) => {
    y = x[Math.floor(Math.random() * x.length)]
    res.json({ answer: y })
  }
}