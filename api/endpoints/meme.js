const f = require("node-fetch")

module.exports = {
  name: "meme",
  run: async(req, res) => {
    const reddits = ["memes","me_irl","dankmemes"];
    const r = reddits[Math.floor(Math.random() * reddits.length)]
    const y = await f(`https://www.reddit.com/r/${r}/random/.json`)
    const z = await y.json()

    const x = z[0].data.children[0].data
    res.json({
      title: x.title,
      url: `https://reddit.com${x.permalink}`,
      image: x.url,
      upvotes: x.ups,
      comments: x.num_comments
    })
  }
}