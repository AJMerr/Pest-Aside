import express from "express"

// Pulles the express router from the controller
const { bugsRouter } = require("./controller/bugsApi")

const app = express() 

// Middleware
app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use("/", bugsRouter)

// Variable to tell the server to run on PORT 8080
const PORT = process.env.PORT || 8080

// HTTP listen and server to start the server
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
})