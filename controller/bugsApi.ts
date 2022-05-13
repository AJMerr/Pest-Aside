import { PrismaClient } from "@prisma/client"
import express from "express" 

const bugsRouter = express.Router()

const prisma = new PrismaClient()

// Get all bugs
bugsRouter.get("/api", async (_req, res) => {
    return await prisma.bug.findMany()
    .then((allBugs: object) => {
        res.json(allBugs)
    })
    .catch((err: Error) => {
        console.error(err)
    })
})

// Get a bug
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

// Create a new bug
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

// Edit a bug
bugsRouter.put("/api/edit/:id", async (req, res) => {
    const { id } = req.params
    await prisma.bug.update({
        where: {
            id: Number(id)
        },
        data: req.body
    })
    .then((updatedBug) => {
        res.json(updatedBug)
    })
    .catch((err) => {
        console.error(err)
    })
})

// Delete a bug
bugsRouter.delete("/api/:id", async (req, res) => {
    const { id } = req.params
    await prisma.bug.delete({
        where: {
            id: Number(id)
        }
    })
    .then(() => {
        return console.log("200 OKAY")
    })
    .catch((err) => {
        console.error(err)
    })
})

module.exports = {
    bugsRouter
}