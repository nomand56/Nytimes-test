const express = require("express")
const cors = require("cors")
const newsRouter = require("./routes/newsroutes")
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api/v1", newsRouter)

app.listen(PORT, () => {
  console.log("Server listening at http://localhost:" + PORT)
})
