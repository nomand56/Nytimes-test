const axios = require("axios")
require("dotenv").config()
const API_KEY = process.env.API_KEY

const newsController = {
  getTopStories: async (req, res) => {
    try {
      const response = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + API_KEY
      )
      res.json({ data: response.data.results.filter((e) => e.multimedia) })
    } catch (error) {
      console.log(error)
      res.json({ error: "Internal server error" })
    }
  }
}
module.exports = newsController
