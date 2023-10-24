const express = require("express")
const router = express.Router()
const newsControllerr = require("../controllers/newscontroller.js")
router.get("/topstories", newsControllerr.getTopStories)

module.exports = router
