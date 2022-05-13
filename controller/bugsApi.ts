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

bugsRouter.get("/api/:id", async (req, res) => {
    const { id } = req.params
    await prisma.bug.findUnique({
        where: {
            id: Number(id)
        }
    })
    .then((oneBug: any) => {
        res.json(oneBug)
    })
    .catch((err) => {
        console.error(err)
    })
})

bugsRouter.post("/api/create", async (req, res) => {
    await prisma.bug.create({
        data: req.body
    })
    .then((newBug: object) => {
        res.json(newBug)
    })
    .catch((err: Error) => {
        console.error(err)
    })
})

bugsRouter.put("/api/edit/:id", async (req, res) => {
    const { id } = req.params
    await prisma.bug.update({
        where: {
            id: Number(id)
        },
        data: {
            bugTitle: req.body,
            bugDescription: req.body,
            priority: req.body
        }
    })
    .then((updatedBug) => {
        res.json(updatedBug)
    })
})

module.exports = {
    bugsRouter
}