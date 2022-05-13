import express from "express"

const { bugsRouter } = require("./controller/bugsApi")

const app = express() 

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use("/", bugsRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
})