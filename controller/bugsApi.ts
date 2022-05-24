import { PrismaClient } from "@prisma/client"
import express from "express" 

const bugsRouter = express.Router()

const prisma = new PrismaClient()

// Get all bugs
bugsRouter.get("/api", async (_req, res) => {
    try {
        const allBugs = await prisma.bug.findMany()
        if (!allBugs) {
            throw new Error("Unable to find bugs")
        }
        res.json(allBugs)
    } catch (err) {
        console.error(err)
    }
})

// Get a bug
bugsRouter.get("/api/:id", async (req, res) => {
    try {
        const { id } = req.params
        const bug = await prisma.bug.findUnique({
            where: {
                id: Number(id)
            }
        })
        if (!bug) {
            throw new Error("Bug not found")
        }
        res.json(bug)
    } catch (err) {
        console.error(err)
    }
})

// Create a new bug
bugsRouter.post("/api/create", async (req, res) => {
    try {
        const newBug = await prisma.bug.create({
            data: req.body
        })
        res.json(newBug)
    } catch (err) {
        console.error(err)
    }
})

// Edit a bug
bugsRouter.put("/api/edit/:id", async (req, res) => {
    try {
        const { id } = req.params
        const updatedBug = await prisma.bug.update({
            where: {
                id: Number(id)
            },
            data: req.body
        })
        res.json(updatedBug)
    } catch (err) {
        console.error(err)
    }
})

// Delete a bug
bugsRouter.delete("/api/:id", async (req, res) => {
    try {
        const { id } = req.params
        await prisma.bug.delete({
            where: {
                id: Number(id)
            }
        })
        res.sendStatus(200)
    } catch (err) {
        console.error(err)
    }
})

module.exports = {
    bugsRouter
}