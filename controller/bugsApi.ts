import express from "express" 

const bugsApi = require("../model/bugs")

const bugsRouter = express.Router()

bugsRouter.get("/api", async (_req, res) => {
     await bugsApi.getAllBugs()
     .then((allBugs: any) => {
         res.json(allBugs)
     })
     .catch((err: any) => {
         console.error(err)
     })
})

module.exports = {
    bugsRouter
}