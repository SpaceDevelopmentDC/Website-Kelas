const x = require("../assets/jobs")

module.exports = {
  name: "eco/job",
  run: async(req, res) => {
    y = x[Math.floor(Math.random() * x.length)]
    res.json({ job: y })
  }
}