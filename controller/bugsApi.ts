import { PrismaClient } from "@prisma/client"
import express from "express" 

const bugsRouter = express.Router()

const prisma = new PrismaClient()

bugsRouter.get("/api", async (_req, res) => {
    return await prisma.bug.findMany()
    .then((allBugs: object) => {
        res.json(allBugs)
    })
    .catch((err: Error) => {
        console.error(err)
    })
})

bugsRouter.post("/api/create", async (req, res) => {
    const bug = await prisma.bug.create({
        data: req.body
    })
    .then((newBug: object) => {
        res.json(newBug)
    })
    .catch((err: Error) => {
        console.error(err)
    })
})

module.exports = {
    bugsRouter
}